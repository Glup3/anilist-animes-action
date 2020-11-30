# Example with different settings

```YML
on:
  schedule:
    - cron: 0 0 * * WED # every wednesday

  workflow_dispatch:

jobs:
  update_animes_kuroo:
    runs-on: ubuntu-latest
    name: Updates kuroo.md Anime List
    steps:
      - uses: actions/checkout@v2
      - uses: glup3/anilist-animes-action@v1.0.3
        with:
          ANILIST_USERNAME: 'Kuroo'
          HEADER_TITLE: "Kuroo's mysterious hidden AniList"
          MARKDOWN_PATH: './users/kuroo.md'
          COMMIT_USERNAME: 'AniBOT'
          COMMIT_EMAIL: 'ani-bot@github.com'
          COMMIT_MESSAGE: 'hehe, watched new animes!'

```

<!-- ANILIST_ANIME:START -->
<!-- ANILIST_ANIME:END -->

<!-- ANILIST_MANGA:START -->
<!-- ANILIST_MANGA:END -->
