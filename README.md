# AniList Animes Action

![Example Screenshot](./screenshots/screenshot1.png?raw=true)

## Usage

Add the following keywords somewhere in your **Markdown** file. The GitHub Action will fill those comments with anime lists.

```Markdown
# My Animes

<!-- ANILIST:START -->
<!-- ANILIST:END -->
```

Create a workflow file `workflow-file-name.yml` under `./github/workflows`. This workflow will trigger automatically
every week or you can trigger it manually by dispatching it under `GitHub Actions`.

```YAML
on:
  schedule:
    # every week
    - cron: 0 0 * * 0

  workflow_dispatch:

jobs:
  update_animes:
    runs-on: ubuntu-latest
    name: Updates README Anime List
    steps:
      - uses: actions/checkout@v2
      - uses: glup3/anilist-animes-action@v1.0.4
        with:
          ANILIST_USERNAME: 'glup3'
          HEADER_TITLE: "Glup3's cool awesome Animes"

```

## Options

| Option             | Default Value                            | Description                                    | Required |
| ------------------ | ---------------------------------------- | ---------------------------------------------- | -------- |
| `COMMIT_USERNAME`  | `AniList Action BOT`                     | Username used for committing to the repository | No       |
| `COMMIT_EMAIL`     | `anilist-action-bot@github.com`          | Email used for committing to the repository    | No       |
| `COMMIT_MESSAGE`   | `Updated Markdown with Users Anime List` | Message used for committing to the repository  | No       |
| `ANILIST_USERNAME` |                                          | AniList Username                               | Yes      |
| `MARKDOWN_PATH`    | `./README.md`                            | Path to the markdown file                      | No       |
| `HEADER_TITLE`     | `My Anime Lists`                         | Title for the header section                   | No       |

# Task List

- [x] User's Anime Lists
- [ ] User's Manga Lists
- [ ] Toggle Lists between GRID and LIST
- [ ] Customize Grid Size (height & width)
- [ ] Additional Info for LIST (anime per line)

# Motivation

I wanted to play around with GitHub Actions & AniList GraphQL API.

# Release a new version

```
ncc build index.js --license licenses.txt
git add .
git commit -m "updated anilist anime action"
git tag -a -m "Action Release v1" v1.0.0
git push --follow-tags
```
