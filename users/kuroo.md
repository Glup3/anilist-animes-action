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

# Kuroo's mysterious hidden AniList

AniList User: [Kuroo](https://anilist.co/user/Kuroo/)  
**Last Updated:** 15:05:15 GMT+0000 (Coordinated Universal Time)



## Dropped

- [Dr. STONE](https://anilist.co/anime/105333)
- [Enen no Shouboutai](https://anilist.co/anime/105310)
- [Toaru Kagaku no Accelerator](https://anilist.co/anime/104463)
- [Karneval](https://anilist.co/anime/16035)
- [Tenrou: Sirius the Jaeger](https://anilist.co/anime/101361)
- [Nanbaka](https://anilist.co/anime/21051)
- [Black Clover](https://anilist.co/anime/97940)
- [Hitorijime My Hero](https://anilist.co/anime/87494)
- [Satsuriku no Tenshi](https://anilist.co/anime/99629)
- [Fruits Basket: 1st Season](https://anilist.co/anime/105334)
- [Mob Psycho 100](https://anilist.co/anime/21507)
- [RobiHachi](https://anilist.co/anime/105928)



## Completed

- [Free!: Dive to the Future](https://anilist.co/anime/101117)
- [Free!](https://anilist.co/anime/18507)
- [Free! Eternal Summer](https://anilist.co/anime/20614)
- [Given](https://anilist.co/anime/108430)
- [Haikyuu!!](https://anilist.co/anime/20464)
- [Haikyuu!! 2](https://anilist.co/anime/20992)
- [Acchi Kocchi](https://anilist.co/anime/12291)
- [Another](https://anilist.co/anime/11111)
- [Arashi no Yoru ni](https://anilist.co/anime/1961)
- [Black Bullet](https://anilist.co/anime/20457)
- [Black★Rock Shooter (TV)](https://anilist.co/anime/11285)
- [Bungou Stray Dogs](https://anilist.co/anime/21311)
- [Chuunibyou demo Koi ga Shitai!](https://anilist.co/anime/14741)
- [Corpse Party: Tortured Souls - Bougyakusareta Tamashii no Jukyou](https://anilist.co/anime/15037)
- [Death Note](https://anilist.co/anime/1535)
- [Death Parade](https://anilist.co/anime/20931)
- [Diabolik Lovers](https://anilist.co/anime/17513)
- [DRAMAtical Murder](https://anilist.co/anime/20677)
- [DRAMAtical Murder OVA: Data_xx_Transitory](https://anilist.co/anime/21011)
- [Gake no Ue no Ponyo](https://anilist.co/anime/2890)
- [Goblin Slayer](https://anilist.co/anime/101165)
- [Howl no Ugoku Shiro](https://anilist.co/anime/431)
- [Junjou Romantica](https://anilist.co/anime/3092)
- [Kantai Collection: KanColle](https://anilist.co/anime/20553)
- [Keijo!!!!!!!!](https://anilist.co/anime/21639)
- [Kotonoha no Niwa](https://anilist.co/anime/16782)
- [Kuroshitsuji](https://anilist.co/anime/4898)
- [Mononoke-hime](https://anilist.co/anime/164)
- [Neko no Ongaeshi](https://anilist.co/anime/597)
- [No Game No Life](https://anilist.co/anime/19815)
- [Omae Umasou da na](https://anilist.co/anime/9204)
- [One Punch Man](https://anilist.co/anime/21087)
- [Ookami Kodomo no Ame to Yuki](https://anilist.co/anime/12355)
- [Orenchi no Furo Jijou](https://anilist.co/anime/20720)
- [Owari no Seraph](https://anilist.co/anime/20829)
- [Rokka no Yuusha](https://anilist.co/anime/20955)
- [Sakurasou no Pet na Kanojo](https://anilist.co/anime/13759)
- [Sen to Chihiro no Kamikakushi](https://anilist.co/anime/199)
- [Shelter](https://anilist.co/anime/97731)
- [Shingeki no Kyojin](https://anilist.co/anime/16498)
- [Shingeki no Kyojin 2](https://anilist.co/anime/20958)
- [Shingeki no Kyojin 3](https://anilist.co/anime/99147)
- [Shingeki no Kyojin Gaiden: Kuinaki Sentaku](https://anilist.co/anime/20811)
- [Shingeki no Kyojin 3 Part 2](https://anilist.co/anime/104578)
- [Sword Art Online](https://anilist.co/anime/11757)
- [Sword Art Online II](https://anilist.co/anime/20594)
- [Tate no Yuusha no Nariagari](https://anilist.co/anime/99263)
- [Tokyo Ghoul](https://anilist.co/anime/20605)
- [Tokyo Ghoul √A](https://anilist.co/anime/20850)
- [Toradora!](https://anilist.co/anime/4224)
- [Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!](https://anilist.co/anime/16742)
- [Wolf's Rain](https://anilist.co/anime/202)
- [Yakusoku no Neverland](https://anilist.co/anime/101759)
- [Boku no Hero Academia](https://anilist.co/anime/21459)
- [Koe no Katachi](https://anilist.co/anime/20954)
- [Yuri!!! on Ice](https://anilist.co/anime/21709)
- [Dakaretai Otoko 1-i ni Odosarete Imasu.](https://anilist.co/anime/101381)
- [Haikyuu!!: Karasuno Koukou VS Shiratorizawa Gakuen Koukou](https://anilist.co/anime/21698)
- [K](https://anilist.co/anime/14467)
- [Kuroshitsuji: Book of Circus](https://anilist.co/anime/20606)
- [Love Stage!!](https://anilist.co/anime/20520)
- [BANANA FISH](https://anilist.co/anime/100388)
- [Promare](https://anilist.co/anime/99425)
- [BEASTARS](https://anilist.co/anime/107660)
- [Doukyuusei](https://anilist.co/anime/21096)
- [Haikyuu!! TO THE TOP](https://anilist.co/anime/106625)
- [Haikyuu!! Riku VS Kuu](https://anilist.co/anime/111790)
- [Darwin's Game](https://anilist.co/anime/105190)
- [Tonari no Totoro](https://anilist.co/anime/523)
- [Kimi no Na wa.](https://anilist.co/anime/21519)
- [Nakitai Watashi wa Neko wo Kaburu](https://anilist.co/anime/114963)
- [Nihon Chinbotsu: 2020](https://anilist.co/anime/112357)
- [Himouto! Umaru-chan](https://anilist.co/anime/20987)
- [BURN THE WITCH](https://anilist.co/anime/116673)
- [Hotarubi no Mori e](https://anilist.co/anime/10408)
- [Koisuru Shirokuma](https://anilist.co/anime/97920)
- [Tenki no Ko](https://anilist.co/anime/106286)



## Paused

- [Magi: The Labyrinth of Magic](https://anilist.co/anime/14513)
- [91Days](https://anilist.co/anime/21711)
- [Bungou Stray Dogs 2](https://anilist.co/anime/21679)
- [Jibaku Shounen Hanako-kun](https://anilist.co/anime/108463)
- [BNA](https://anilist.co/anime/110354)
- [Kiseijuu: Sei no Kakuritsu](https://anilist.co/anime/20623)
- [Made in Abyss](https://anilist.co/anime/97986)
- [GREAT PRETENDER](https://anilist.co/anime/110349)
- [Koi to Producer: EVOL×LOVE](https://anilist.co/anime/110371)



## Planning

- [Kimetsu no Yaiba](https://anilist.co/anime/101922)
- [Given Movie](https://anilist.co/anime/111734)
- [BEASTARS 2nd Season](https://anilist.co/anime/114194)
- [Somali to Mori no Kamisama](https://anilist.co/anime/108617)
- [Wei, Kanjian Erduo La!](https://anilist.co/anime/104080)
- [Ten Count](https://anilist.co/anime/101387)
- [Shingeki no Kyojin: The Final Season](https://anilist.co/anime/110277)
- [Fugou Keiji: Balance:UNLIMITED](https://anilist.co/anime/114888)
- [Boku Dake ga Inai Machi](https://anilist.co/anime/21234)
- [Ikebukuro West Gate Park](https://anilist.co/anime/111324)
- [WAVE!! Surfing Yappe!!](https://anilist.co/anime/111137)
- [THE GOD OF HIGH SCHOOL](https://anilist.co/anime/116006)
- [Free! (2021)](https://anilist.co/anime/107203)
- [Umibe no Étranger](https://anilist.co/anime/112788)
- [Fumetsu no Anata e](https://anilist.co/anime/114535)
- [Dororo](https://anilist.co/anime/101347)
- [Yakusoku no Neverland 2nd Season](https://anilist.co/anime/108725)
- [MARS RED](https://anilist.co/anime/115183)
- [Grand Blue](https://anilist.co/anime/100922)
- [Yuukoku no Moriarty](https://anilist.co/anime/114124)
- [YURI!!! on ICE the movie : ICE ADOLESCENCE](https://anilist.co/anime/98656)
- [Hunter x Hunter (2011)](https://anilist.co/anime/11061)
- [Sakamichi no Apollon](https://anilist.co/anime/12531)
- [Kono Subarashii Sekai ni Shukufuku wo!](https://anilist.co/anime/21202)
- [Seikaisuru Kado](https://anilist.co/anime/21452)
- [Darling in the Franxx](https://anilist.co/anime/99423)



## Watching

- [Jujutsu Kaisen](https://anilist.co/anime/113415)
- [Haikyuu!! TO THE TOP 2](https://anilist.co/anime/113538)
- [Shinchou Yuusha: Kono Yuusha ga Ore TUEEE Kuse ni Shinchou Sugiru](https://anilist.co/anime/105156)
- [Guraburu!](https://anilist.co/anime/117086)


<!-- ANILIST_ANIME:END -->

<!-- ANILIST_MANGA:START -->

# Kuroo's mysterious hidden AniList

AniList User: [Kuroo](https://anilist.co/user/Kuroo/)  
**Last Updated:** 15:05:15 GMT+0000 (Coordinated Universal Time)



## Completed

<img height="150px" width="100px" title="Ten Count" alt="Ten Count" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx85555-b7hCT4nEh93W.png"> <img height="150px" width="100px" title="Starlike Words" alt="Starlike Words" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx55682-FcFrgZJDBU2O.png"> <img height="150px" width="100px" title="Gaegachi Salja" alt="Gaegachi Salja" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx99905-s7keuKcYpfpq.jpg"> <img height="150px" width="100px" title="BJ Alex" alt="BJ Alex" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx100885-hZB9cTORsm6L.jpg"> <img height="150px" width="100px" title="Killing Stalking" alt="Killing Stalking" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx97897-jBnmsawTpeaZ.jpg"> <img height="150px" width="100px" title="BJ Alex: BJ. MD" alt="BJ Alex: BJ. MD" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b114768-YAGgn0Lxxwzf.jpg"> <img height="150px" width="100px" title="BJ Alex: Side Story" alt="BJ Alex: Side Story" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b120796-GI0J3b7WodD8.png"> 


## Paused

<img height="150px" width="100px" title="Sachi-iro no One Room" alt="Sachi-iro no One Room" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx100557-55nghYjyfP4i.jpg"> 


## Reading

<img height="150px" width="100px" title="Here U Are" alt="Here U Are" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx100805-l4Cs536x6Eee.jpg"> <img height="150px" width="100px" title="Dear Door" alt="Dear Door" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx107658-bmhfD73gUqHe.jpg"> <img height="150px" width="100px" title="Suhwa" alt="Suhwa" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b98620-QPqoO8r0Prp3.png"> <img height="150px" width="100px" title="Se Gaeui Jeom" alt="Se Gaeui Jeom" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/100434-SKSqvcKA607B.png"> <img height="150px" width="100px" title="Love or Hate" alt="Love or Hate" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx105862-t72QEWB0BJzZ.png"> 


## Planning

<img height="150px" width="100px" title="Geu Kkeute Inneun Geot" alt="Geu Kkeute Inneun Geot" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx97973-Tur5Az8770tz.png"> <img height="150px" width="100px" title="Seven Days" alt="Seven Days" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx39296-Onb3c5k2Q5OG.png"> <img height="150px" width="100px" title="Dakaretai Otoko 1-i ni Odosarete Imasu." alt="Dakaretai Otoko 1-i ni Odosarete Imasu." src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx90765-nfNeKKIybJER.jpg"> <img height="150px" width="100px" title="Cheongyejibu Roman Company" alt="Cheongyejibu Roman Company" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/98055-4tm3vmbVHCve.jpg"> <img height="150px" width="100px" title="Bokura ni Matsuwaru etc." alt="Bokura ni Matsuwaru etc." src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx39643-3fnoghFpTd50.png"> <img height="150px" width="100px" title="Ore to Joushi no Kakushigoto" alt="Ore to Joushi no Kakushigoto" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx98020-on3NSDgFkZ70.jpg"> <img height="150px" width="100px" title="Itadakimasu, Gochisousama" alt="Itadakimasu, Gochisousama" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx96711-j0Y65iafmGwK.jpg"> <img height="150px" width="100px" title="Hinekure Chaser" alt="Hinekure Chaser" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx95333-iGgEEn9bxMgT.jpg"> <img height="150px" width="100px" title="Yahwacheop" alt="Yahwacheop" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b111621-HwID0FLvpRpn.jpg"> <img height="150px" width="100px" title="Caste Heaven" alt="Caste Heaven" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx85531-N6meuhRxD9DC.jpg"> <img height="150px" width="100px" title="Choegangui Naemsae" alt="Choegangui Naemsae" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b99307-Tky1MR9a8w6Q.jpg"> <img height="150px" width="100px" title="Gyeoul Jina Beojkkoch" alt="Gyeoul Jina Beojkkoch" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/100473-WRN9M5fZIniX.png"> <img height="150px" width="100px" title="Zettai BL ni Naru Sekai VS Zettai BL ni Naritakunai Otoko" alt="Zettai BL ni Naru Sekai VS Zettai BL ni Naritakunai Otoko" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105175-6oZTk31RYHzZ.jpg"> <img height="150px" width="100px" title="Zombie Hide Sex" alt="Zombie Hide Sex" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx115335-Lqy3DHrHWWfQ.png"> <img height="150px" width="100px" title="Yakusoku no Neverland" alt="Yakusoku no Neverland" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx87423-gPNtu8QbGped.jpg"> <img height="150px" width="100px" title="Sonyeoneul Wirohaejwo" alt="Sonyeoneul Wirohaejwo" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx116942-jq9Vx4Uv36VV.jpg"> <img height="150px" width="100px" title="Neoran Namja" alt="Neoran Namja" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/97872-ElHhJgjGIMCk.jpg"> <img height="150px" width="100px" title="Aein Shuttle" alt="Aein Shuttle" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b109511-bJb32obrME8M.jpg"> <img height="150px" width="100px" title="Guodu Jiechu" alt="Guodu Jiechu" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/100708-hjtoZCz70w0B.png"> <img height="150px" width="100px" title="Boghag Saeng" alt="Boghag Saeng" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx111133-fHes7FrhwqxU.jpg"> <img height="150px" width="100px" title="Cover Up" alt="Cover Up" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx113054-3vrETmXUzMtF.png"> <img height="150px" width="100px" title="Blood Bank" alt="Blood Bank" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/97843-LYN8e4raT30F.jpg"> <img height="150px" width="100px" title="Noblesse" alt="Noblesse" src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx59983-cfSjrRxuAlAD.png"> 

<!-- ANILIST_MANGA:END -->
