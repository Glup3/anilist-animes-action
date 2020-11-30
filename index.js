const core = require('@actions/core');
const util = require('util');
const fetch = require('node-fetch');
const fs = require('fs');

const exec = util.promisify(require('child_process').exec);

const KEYWORD_ANIME_START = '<!-- ANILIST_ANIME:START -->';
const KEYWORD_ANIME_END = '<!-- ANILIST_ANIME:END -->';
const KEYWORD_MANGA_START = '<!-- ANILIST_MANGA:START -->';
const KEYWORD_MANGA_END = '<!-- ANILIST_MANGA:END -->';

(async () => {
  const commitUsername = core.getInput('COMMIT_USERNAME');
  const commitEmail = core.getInput('COMMIT_EMAIL');
  const commitMessage = core.getInput('COMMIT_MESSAGE');
  const anilistUsername = core.getInput('ANILIST_USERNAME');
  const markdownPath = core.getInput('MARKDOWN_PATH');
  const headerTitle = core.getInput('HEADER_TITLE');
  const isAnimeGrid = core.getInput('ANIME_GRID') === 'true';
  const isMangaGrid = core.getInput('MANGA_GRID') === 'true';

  try {
    const selectedMarkdown = fs.readFileSync(markdownPath, 'utf-8');

    const animeLists = await getMediaListsFromUsername(anilistUsername, 'ANIME');
    const animeContent = buildMarkdownMediaLists(animeLists, isAnimeGrid);
    const animeMarkdown = buildCompleteMarkdown(anilistUsername, headerTitle, animeContent);
    const animeInjectedMarkdown = injectMarkdownWithContent(
      selectedMarkdown,
      animeMarkdown,
      KEYWORD_ANIME_START,
      KEYWORD_ANIME_END
    );

    const mangaLists = await getMediaListsFromanilistUsername(anilistUsername, 'MANGA');
    const mangaContent = buildMarkdownMediaLists(mangaLists, isMangaGrid);
    const mangaMarkdown = buildCompleteMarkdown(anilistUsername, headerTitle, mangaContent);
    const mangaInjectedMarkdown = injectMarkdownWithContent(
      animeInjectedMarkdown,
      mangaMarkdown,
      KEYWORD_MANGA_START,
      KEYWORD_MANGA_END
    );

    if (selectedMarkdown === mangaInjectedMarkdown) {
      core.info('No changes detected');
    } else {
      fs.writeFileSync(markdownPath, mangaInjectedMarkdown);
      await commitMarkdownFile(markdownPath, commitUsername, commitEmail, commitMessage);
      core.info('Markdown successfully updated');
    }
  } catch (error) {
    core.error(error.message);
  }
})();

function getMediaListsFromUsername(username, mediaType) {
  const url = 'https://graphql.anilist.co';
  const query = fs.readFileSync('./my-animes.graphql', 'utf-8');
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: { username: username, type: mediaType },
    }),
  };

  return fetch(url, options)
    .then((resp) => {
      return resp.json().then((json) => {
        return resp.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      return data.data.MediaListCollection.lists;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

function buildMarkdownMediaLists(lists, isGrid = true) {
  let markdownText = '';

  for (const list of lists) {
    markdownText += `\n\n## ${list.name}\n\n`;
    markdownText += isGrid ? buildMarkdownMediaGrid(list) : buildMarkdownMediaList(list);
    markdownText += '\n';
  }

  return markdownText;
}

function buildMarkdownMediaGrid(list) {
  let markdownText = '';
  const imgHeight = core.getInput('IMG_HEIGHT');
  const imgWidth = core.getInput('IMG_WIDTH');

  for (const entry of list.entries) {
    const animeName = entry.media.title.romaji.replace(/"/g, "'");
    const animeImage = entry.media.coverImage.large;
    markdownText += `<img height="${imgHeight}px" width="${imgWidth}px" title="${animeName}" alt="${animeName}" src="${animeImage}"> `;
  }

  return markdownText;
}

function buildMarkdownMediaList(list) {
  let markdownText = '';

  for (const entry of list.entries) {
    const animeName = entry.media.title.romaji;
    const animeUrl = entry.media.siteUrl;
    markdownText += `- [${animeName}](${animeUrl})\n`;
  }

  return markdownText;
}

function buildCompleteMarkdown(username, title, content) {
  let markdownText = `\n# ${title}`;
  const time = new Date().toTimeString();

  markdownText += `\n\nAniList User: [${username}](https://anilist.co/user/${username}/)  \n`;
  markdownText += `**Last Updated:** ${time}\n\n`;
  markdownText += content;

  return markdownText;
}

function injectMarkdownWithContent(markdown, injectedContent, keywordStart, keywordEnd) {
  const newMarkdown = markdown.split('\n');

  const startIndex = newMarkdown.findIndex((content) => content.trim() === keywordStart);

  if (startIndex === -1) {
    core.info(`Couldn't find ${keywordStart} comment`);
    core.info(`Skipping ${keywordStart}`);
    return markdown;
  }

  const endIndex = newMarkdown.findIndex((content) => content.trim() === keywordEnd);

  if (endIndex === -1) {
    core.info(`Couldn't find ${keywordEnd} comment`);
    core.info(`Skipping ${keywordEnd}`);
    return markdown;
  }

  newMarkdown.splice(startIndex + 1, endIndex - startIndex - 1, injectedContent);

  return newMarkdown.join('\n');
}

async function commitMarkdownFile(markdownPath, username, email, message) {
  await exec(`git config --global user.email "${email}"`);
  await exec(`git config --global user.name "${username}"`);
  await exec(`git add ${markdownPath}`);
  await exec(`git commit -m "${message}"`);
  await exec(`git push`);
}
