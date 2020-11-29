const core = require('@actions/core');
const github = require('@actions/github');
const util = require('util');
const fetch = require('node-fetch');
const fs = require('fs');

const exec = util.promisify(require('child_process').exec);

const KEYWORD_START = '<!-- ANILIST:START -->';
const KEYWORD_END = '<!-- ANILIST:END -->';

(async () => {
  const commitUsername = core.getInput('COMMIT_USERNAME');
  const commitEmail = core.getInput('COMMIT_EMAIL');
  const commitMessage = core.getInput('COMMIT_MESSAGE');
  const anilistUsername = core.getInput('ANILIST_USERNAME');
  const markdownPath = core.getInput('MARKDOWN_PATH');
  const headerTitle = core.getInput('HEADER_TITLE');

  try {
    const content = await buildCompleteMarkdown(anilistUsername, headerTitle);
    const selectedMarkdown = fs.readFileSync(markdownPath, 'utf-8');
    const injectedMarkdown = injectMarkdownWithContent(
      selectedMarkdown,
      content
    );

    if (selectedMarkdown === injectedMarkdown) {
      core.info('No changes detected');
    } else {
      fs.writeFileSync(markdownPath, injectedMarkdown);
      await commitMarkdownFile(
        markdownPath,
        commitUsername,
        commitEmail,
        commitMessage
      );
      core.info('Markdown successfully updated');
    }
  } catch (error) {
    core.error(error.message);
  }
})();

function getAnimeListsFromUsername(username) {
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
      variables: { username: username },
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

function buildMarkdownAnimeLists(lists) {
  let markdownText = '';

  for (let i = 0; i < lists.length; i++) {
    markdownText += `## ${lists[i].name}\n\n`;
    markdownText += buildMarkdownAnimeGrid(lists[i]);
    markdownText += '\n';
  }

  return markdownText;
}

function buildMarkdownAnimeGrid(list) {
  let markdownText = '';

  for (let i = 0; i < list.entries.length; i++) {
    const animeName = list.entries[i].media.title.romaji;
    const animeImage = list.entries[i].media.coverImage.large;
    markdownText += `<img height="200px" width="150px" title="${animeName}" alt="${animeName}" src="${animeImage}"> `;
  }

  return markdownText;
}

async function buildCompleteMarkdown(username, title) {
  let markdownText = `\n# ${title}`;
  const animes = await getAnimeListsFromUsername(username);
  const time = new Date().toTimeString();

  markdownText += `\n\nAniList User: [${username}](https://anilist.co/user/${username}/animelist)  \n`;
  markdownText += `**Last Updated:** ${time}\n\n`;
  markdownText += buildMarkdownAnimeLists(animes);

  return markdownText;
}

function injectMarkdownWithContent(markdown, injectedContent) {
  const newMarkdown = markdown.split('\n');

  const startIndex = newMarkdown.findIndex(
    (content) => content.trim() === KEYWORD_START
  );

  if (startIndex === -1) {
    throw new Error(`Couldn't find ${KEYWORD_START} comment`);
  }

  const endIndex = newMarkdown.findIndex(
    (content) => content.trim() === KEYWORD_END
  );

  if (endIndex === -1) {
    throw new Error(`Couldn't find ${KEYWORD_END} comment`);
  }

  newMarkdown.splice(
    startIndex + 1,
    endIndex - startIndex - 1,
    injectedContent
  );

  return newMarkdown.join('\n');
}

async function commitMarkdownFile(markdownPath, username, email, message) {
  await exec(`git config --global user.email "${email}"`);
  await exec(`git config --global user.name "${username}"`);
  await exec(`git add ${markdownPath}`);
  await exec(`git commit -m "${message}"`);
  await exec(`git push`);
}
