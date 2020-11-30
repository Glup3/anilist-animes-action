# Example with different settings

```YML
on:
  workflow_dispatch:

jobs:
  update_animes_rejukes:
    runs-on: ubuntu-latest
    name: Updates rejukes.md Anime List
    steps:
      - uses: actions/checkout@v2
      - uses: glup3/anilist-animes-action@v1.0.3
        with:
          ANILIST_USERNAME: 'Rejukes'
          MARKDOWN_PATH: './users/rejukes.md'

```

<!-- ANILIST_ANIME:START -->
<!-- ANILIST_ANIME:END -->
