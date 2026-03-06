---
title: /tech/changelog
description: DC Engine changelog
keywords: dc engine, changelog
layout: page
permalink: /tech/changelog/
---

<!--
<h1 hidden>DC Engine changelog</h1>
-->

{% include back.html %}

## > changelog

## > 2026

<details>
<summary>v1.13.10 [03.03.2026]</summary>
    <li>New API functions: `getFlowSize` and `getSessionSize`</li>
    <li>Fix Dockerfile: use ubuntu 24.04</li>
    <li>Fix global user extension object return for Tuple3 flow callback function</li>
    <li>Remove test depepdencies from main libraries</li>
</details>

<details markdown="1">
<summary>v1.13.9 [26.02.2026]</summary>

- Downgrade standard C++20 -> C++17
- Remove spdlog and Trace library dependency and provide callback mechanism for trace events
- Update C API and packet_processor examples
- LayerFabric pool. New configurations settings: `memory_pool`
- Fix mpsc_queue queue count initialisation
- Fix User Extension Context assigning to Global object on flow release callback stage
- Improve performance characteristcs
- Simplify documentation: remove images and use ASCII art schemes
- Update service signatures
- 
</details>

<details markdown="1">
<summary>v1.13.8 [30.01.2026]</summary>

- Add C API example
- Service update: yandex_marketing_platform, amazon_aws, apple, digital_ocean, facebook, github, google_cloud, icloud_private_relay, meta, netflix,
- Fix small mistakes
- 
</details>

<details markdown="1">
<summary>v1.13.7 [18.01.2026]</summary>

- Advanced performance test
- Fix some service naming
- Service update: amazon_aws, apple, digital_ocean, discord, facebook, github, icloud_private_relay, meta	, netflix, roblox, vultr
- Session state flags: protocol path, tags, offload changing
- Fix 2 crashes: FTP cache and classifier extension

</details>

<hr>

## > 2025

<details>
<summary>v1.13.6 [18.12.2025]</summary>

- Update service signatures: webex, vultr, meta, icloud_private_relay, facebook, apple, amazon_aws, discord, disney_plus, facebook, github, icloud_private_relay, kingsoft, meta, netflix, roblox, vultr
- Calculation of JA4+ and JA4s+ hashes
- New TLS dissection fields: signature_algorithms extension rfc5246
- Fix flow releasing problem
- 350 new services: alibaba, alibaba_cloud, bytedance, huawei, huawei_cloud, ibm, ibm_cloud, tencent_cloud, atlassian, adobe, adobe_ads, adobe_connect, adobe_fonts, aliexpress, checkpoint, veeam, amd, auth0, baidu, behance, bestbuy, bigcommerce, bing, bitdefender, bootstrap, brave_browser, canva, cisco, comcast, costco, cyberghostvpn, docusign, digg, doordash, epic_games, etsy, expressvpn, figma, firefox, fortinet, gravatar, gumtree, heap, heroku, hootsuite, hotjar, dell, ikea, instacart, intel, ivpn, lyft, malwarebytes, mcafee, medium, microsoft_authentication, mozilla, nextdns, nike, nvidia, okta, opera, oracle, oracle_cloud, playstation, privateinternetaccess, proton_vpn, protonmail, samsung, sap, servicenow, shein, shopee, shopify, signal, sony, splunk, squarespace, steam, surfshark, symantec, t_mobile, target, temu, tesla, tor, trend_micro, verizon, vmware, walmart, wayfair, webflow, windscribe, wish, woocommerce, workday, xbox, xiaomi, zalando, qualcomm, grafana, redis_cloud, datadog, docker, new_relic, the_trade_desk, criteo, taboola, outbrain, appnexus, doubleverify, nielsen, comscore, adyen, afterpay, square, wise, razorpay, naver, american_airlines, american_express, mastercard, visa, at_and_t, avast, acronis, axios, the_pirate_bay, ethereum, z_cash, monero, coinbase, dazn, digicert, ticketmaster, eset, flickr, sharefile, giphy, hotspot_shield, nordvpn, hostgator, godaddy, namecheap, imgix, jquery, kayak, liftoff, mopub, mtv, moonton, minecraft, moloco, mewe, optus, origin_ea, omegle, redtube, onlyfans, pornhub, youporn, xvideos, xhamster, xnxx, youjizz, pulsepoint, pubnub, patreon, pendo, paytm, trello, qq, rackspace, roku, ring, red_hat, sendgrid, shutterfly, sky, starz, sophos, starhub, sharethis, three, threema, tmall, tidal, flightradar24, toutiao, tubi, tmz, tableau, bitly, discourse, telia, telenor, urban_airship, uplynk, umeng, virtualbox, ubuntu, ubisoft, unity, userreport, ups, urbanvpn, ubiquiti, vevo, viu, valorant, vix, vice, wasabi, weborama, wells_fargo, wix, wistia, wordpress, wargaming, weebly, webmd, wondershare, wurl, xumo, yelp, youku, yieldmo, zattoo, zoho, zynga, zapier, zillow, zomato, zscaler, whoosh, urent, megafon, mts, tele2, beeline, yota, tinkoff_mobile, sber_mobile, russia_today, gazeta, rbc, lenta, newsru, liferu, aif, kp, 360ru, ura_news, baza_io, fontanka, pravda, mk, kommersant, izvestiya, cnews, betboom, winline, fonbet, pari, leon, olimpbet, betcity, ligastavok, profi_ru, boosty, kickstarter, myoffice, chat_ruletka, biggeek, marca, lucidchart, kaggle, jfrog, reg.ru, ru_center, dribbble, blablacar, krea, seedance, flux, ideogram, seedream, kling, wan, hunyuan, hailuoai, luma, pika, runway_gen, rutracker, emirates, s7, aeroflot, pobeda, utair, ural_airlines, nordwind, smartavia, red_wings, onetwotrip, lifehacker, tjournal, livejournal, flutterflow, rzd, nalog_ru, jetbrains, leetcode, hackerone, bugcrowd, codility, sourceforge, steipk, lingualeo, urban_dictionary, safetywing, toptal, skyeng, grammarly, reverse_context, gitbook, laravel, hubspot, stack_share, tilda, crunchbase, payproglobal, hacker_news, tradingview, edx, miro, fatsecret, cloudtips, netmonet, sber_tips, championat, sportbox, match_tv, yandex_drive, delimobil, citydrive, belkacar, citymobil, people, genius
</details>

<details>
<summary>v1.13.1 [1.12.2025]</summary>

- Update classification rules for the following services: Amazon AWS, Apple, Facebook
- Fix QUIC decryption (Server->Client)
- Update QUIC detection logic (not QUIC padding block checks)
- HTTP/3 detection via ALPN
- IPv6 dissection error fix
- Fix unhandled exception of DNS Cache
- Fix bracket expression bug
- Add interface configuration for CLI tool
- Update traffic-profile CLI output
</details>

<details>
<summary>v1.13.0 [18.11.2025]</summary>

- Update classification rules for the following services: Amazon AWS, Apple, Discord, Disney Plus, Meta, Facebook, GitHub, iCloud Private Relay, Nintendo, Roblox, Vultr
- New protocol: GTP
- GTP encapsulation processing
</details>

<details>
<summary>v1.12.0 [10.11.2025]</summary>

- Update classification rules for the following services: Meta, Facebook, Apple, Amazon AWS, Netflix
- Universal session storage for byte-sequence data (in-built, user storage)
- IP reclassification
- Improve QUIC reassembler: message assembling from different packets
</details>

<details>
<summary>v1.11.0 [5.11.2025]</summary>

- New protocol: RTP Over QUIC
- Update classification rules for the following services: Meta, Yahoo, Snapchat, Line, Kingsoft, GitHub, Google Cloud, Facebook, Apple, Amazon AWS
- 51 new services: WeChat, Facebook Messenger, LINE, KakaoTalk, Slack, Vimeo, Amazon Video, Hulu, Disney Plus, Dailymotion, Weibo, Douyin, Nextdoor, KIK, Signal, Shodan, Mega, Yahoo Mail, Yahoo Ads, Let's Encrypt, ESPN, AnyDesk, Stripe, Alipay, AMP Project, Kaskpersky, Careem, Amediateka, IVI, START, PREMIER, Okko, Wink, ZVOOQ (Sber), OpenStreetMap, Mapbox, Mapy.com, Quora, Zhihu, StackOverflow, StackExchange, Scribd, Answers, Tumblr, Evernote, Dzen, Imgur, Google Translate, YaStatic, Yandex Mail, Yandex API
- Update API to dissect only required protocol fields
- Performance improvements (35%)
- Activation/Deactivation protocols
- Universal session storage for string data (in-built, user storage)
</details>

<details>
<summary>v1.10.1 [18.10.2025]</summary>

- Update classification rules for the following services: Amazon, Apple, Facebook, Meta, Roblox, SalesForce, GitHub, Netflix, Twitch, Dropbox, Vultr
- 34 new services: Google Marketing Platform, Gstatic, Eurosport, Blogger, Fox News, IMDb, Apple Siri, DuckDuckGo, Yahoo, LastPass, Bitwarden, 1Password, RoboForm, Notion, Obsidian, Wikipedia, Freelancer, Upwork, Glassdoor, Indeed, HeadHunter, Binance, Daily Mail, Der Spiegel, Forbes, Vox, SoundCloud, Last.fm, TripAdvisor, HBO, Cursor, Windsurf, Deezer, Yandex Marketing Platform
- Hotline update: configuration updating without stopping traffic processing
</details>

<details>
<summary>v1.10.0 [12.10.2025]</summary>

- Update service classification signatures
- Introduction of a tool for automatic updating of the signature and domain name database for the supported services
- Isolated worker cache storage
- Simplifying user's service configuration process
- Manual configuration of protocol dissection list
- 45 new services: Booking.com, Airbnb, Aviasales, Skyscanner, Ostrovok, Sutochno, CIAN, Sports.ru, BBC, Bloomberg, Washington Post, Wall Street Journal, Pinterest, Samokat, Yandex Lavka, Yandex Market, Lamoda, Chess.com, eBay, Amazon.com, Tinder, Badoo, Snapchat, TikTok, Bookmate, Salesforce, Deepseek, ChatGPT, Reddit, Threads, Shazam, Google Meet, Google Chat (aka Hangouts Chat), Google Gemini, Google Drive, Alfa bank, Raiffeisen bank, PayPal, Netflix, LinkedIn, Likee, Roblox, Duolingo, Udemy, Coursera
</details>

<details>
<summary>v1.9.0 [21.09.2025]</summary>

- 5 new services: GosUslugi, Google API, Uber, Cloudinary, Yandex360
- STUN: detection algorithm update
- QUIC and OpenVPN: detection algorithm update
- HTTP Content-Length processing bug fix
- SDP (SIP body) dissection
- 2 new protocols: SRTP, SRTCP
- SIP cache extension for classification child flows
- CLI: first protocol configuration
- Update service signatures: yandex, yandex_cloud, meta, facebook, apple, dropbox, github, kingsoft, teamviwer, twitch, webex, amazon_aws, amazon_cloudfront, digital_ocean, vultr, zoom, icloud_private_relay, ms_azure, ms365, ms_exchange, ms_sharepoint, ms_teams, telegram, cloudflare, fastly, discord, google_cloud, whatsapp, vkontakte, nintendo.
SIP protocol. 3 new field dissection: CSeq, CSeqNumber, CSeqMethod
</details>

<details>
<summary>v1.8.1 [1.09.2025]</summary>

- 10 new services: 2GIS, SpeedTest, Yandex Maps, Yandex Music, Ozon, Wildberries, Avito, GalaxyStore, RuStore, AppGallery.
- Performance improvements
</details>

<details>
<summary>v1.8.0 [30.07.2025]</summary>

- 34 new services: Facebook, Instagram, Twitter (X), Apple, iCloud Private Relay, iCloud, iTunes, Apple Updates, Apple TV, Apple Map, Apple Mail, Apple Pay, Apple Map, FaceTime, Apple Music, AppStore, MS Azure, Digital Ocean, Vultr, Amazon Cloudfront, Cloudfront DNS, Dropbox, Zendesk, Kingsoft, Facebook CDN, Spotify, Google Pay, Gmail, Google Maps, Twitch, TeamViewer, Webex, GitHub, GitLab.
Update service classification: Apple Push Notification, Discord, YouTube, MS365 and its subsidiary services
- Dissection of new fields in the DNS protocol (HTTPS RData section: Mandatory, NoDefaultAlpn, Alpn, Port, IPv4Hints, IPv6Hints)
- A new field has been added to the classifier extension to determine the classification type (IP address, domain, cache, etc.)
- The DNS Cache and Session Cache extensions have been integrated into the Classifier extension
- Improve DNS Cache classification (SVC parameters processing and IPv6)
- Simplification of service creation - synonym and permitted tags are removed
- Brackets support in expression language
- Fix error of getting session tags
- CLI update: CSV output
</details>

<details>
<summary>v1.7.0 [4.07.2025]</summary>

- tls_metadata extension. Calculates JA3 and JA3S hashes.
- 12 new protocols: IMAPS, SMTPS, FTPS, POP3S, NNTPS, IGMP, POP3, SMTP, OSPF, IMAP, WebSocket, RTCP
- 7 new services: Cloudflare, Fastly, Akamai, Amazon AWS, Sberbank, TBank, Revolut
- HTTP/2 decoder bug fix
- HTTP and FTP field list update
- CLI: print field decoder information
- Small bugs fixes and cosmetic API changes
</details>

<details>
<summary>v1.6.0 [6.06.2025]</summary>

- Update API to simplify DC Engine configuration
- Update dependencies
- Add Nintendo service
</details>

<details>
<summary>v1.5.1 [21.05.2025]</summary>

- CLI update (JSON output, config statistic)
- More examples
- CLI (CPU pinning)
- Performance improvements
- Small bug fixes
</details>

<details>
<summary>v1.5.0 [10.04.2025]</summary>

- Update API for convenience purposes
- Fix few bugs in in-built extensions
- Update examples
</details>

<details>
<summary>v1.4.0 [21.03.2025]</summary>

- IPv4/IPv6 CIDR configuration
- New 'address' field for IPv4/IPv6 protocols (to simplify configuration rules)
- SPID (Statistical Protocol IDentification) extension. The extension allows to assign tags by flow statistic metrics such as average packet size, bitrate, IAT
- Introduce the opportunity for extension to assign flow tags independently from matchers
- POP3 protocol
- IMAP protocol
- RTCP protocol
- IGMP protocol
- Session and DNS Cache optimization
- Extensions priority options
</details>

<hr>

## > 2024

<details>
<summary>v1.3.0 [20.12.2024]</summary>

- Packet direction detection
- Packet API is changed
- ILayer API is changed
- HTTP Authentication data extraction
- HTTP FileType and Mime information extraction
- Telnet protocol
- ISAKMP protocol
- OpenVPN protocol
- Wireguard protocol
- NTP protocol
- FTP protocol
- SFTP protocol
- STUN protocol
- SSH protocol
- SOCKS protocol
- IPv6 protocol
- ICMPv6 protocol
- RTP protocol
- L2TP protocol
- SIP protocol
- SIP Over TLS protocol
- Teredo protocol
- PPTP Protocol
- PPP protocol
- PPPOE (Session and Discovery) protocol
- BitTorrent protocol
- BitTorrent DHT
- BitTorrent UTP
- BitTorrent Tracker
- IPv6 Flow table
- Data cache is added for session context to allow detect protocols which have high entropy
- Update protocol tree extension
- TLS/DTLS Session Cache
- FTP Cache extension. The extension helps to classify FTP Data Plane flows
- Final extension. The extension allows to finalize protocol detection and service classification process
- Update Protocol Tree extension to allow build tree based on TLS ALPN and PPP types
- Extension configuration
- Fixed small bugs and improved library stability
- CLI is updated: time measuring, printing specific fields, table/flow/packet output modes for printing events
- Apple Push Notification service classification
- Fixed small bugs and improved library stability
</details>

<details>
<summary>v1.2.0 [2.10.2024]</summary>

- Hotline update: updating configuration for DC Engine without application stopping
- HTTP/2 protocol: implementation of dissection functionality of HTTP/2 protocol
- DTLS protocol: implementation of dissection functionality of DTLS protocol (Datagram Transport Layer Security)
- Performance optimization
- QUIC Cache extension is removed. The functionality are going to be re-implemented as session migration mechanism for TLS, DTLS, and QUIC protocols.
- Protocol Tree extension for printing protocol list of the packet
- HTTP/2 Field Block extension for decoding HTTP/2 headers
- HTTP Host extension is removed. Host Name extension is introduced. Host Name extension extracts hostname value from TLS, DTLS, HTTP/1.*, SSDP, and HTTP/2.0 protocols.
- Data Structure extension checks the payload structure (when protocol is undefined) what helps to detect some service patterns.
</details>

<details>
<summary>v1.1.0 [31.07.2024]</summary>

- Partial matching for String/Bytesequence types
- "Try Dissect" protocol detection method implementation
- CLI: expression compiler (verifying tag expression without application launching)
</details>

<details>
<summary>v1.0.0 [16.03.2024]</summary>

- Supported 17 protocols
- Tagging system
- Internal log system
- Extension mechanism (built-in and user extensions)
- DC Engine CLI
- Force tag extraction mode
- Configurable packet frame manager
- Configurable reassembler
- Internal and External flow table mode
- Benchmarks
</details>