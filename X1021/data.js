// 推文数据存储
let tweetsData = [
    {
        "id": 1761030276601,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-1.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 11,
            "likes": 79,
            "views": 938
        }
    },
    {
        "id": 1761030278301,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-2.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 10,
            "likes": 56,
            "views": 536
        }
    },
    {
        "id": 1761030282006,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-3.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 12,
            "likes": 31,
            "views": 633
        }
    },
    {
        "id": 1761030281900,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-4.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 11,
            "retweets": 5,
            "likes": 14,
            "views": 2384
        }
    },
    {
        "id": 1761030281476,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-5.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 9,
            "likes": 71,
            "views": 1404
        }
    },
    {
        "id": 1761030276063,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-6.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 20,
            "likes": 74,
            "views": 2365
        }
    },
    {
        "id": 1761030281794,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-7.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 5,
            "retweets": 12,
            "likes": 36,
            "views": 846
        }
    },
    {
        "id": 1761030281584,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-8.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 11,
            "retweets": 3,
            "likes": 45,
            "views": 1943
        }
    },
    {
        "id": 1761030281372,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-9.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 5,
            "retweets": 5,
            "likes": 79,
            "views": 2346
        }
    },
    {
        "id": 1761030281264,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-10.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 16,
            "likes": 73,
            "views": 780
        }
    },
    {
        "id": 1761030280844,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-11.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 22,
            "likes": 57,
            "views": 1447
        }
    },
    {
        "id": 1761030281157,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-12.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 11,
            "likes": 12,
            "views": 660
        }
    },
    {
        "id": 1761030281052,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-13.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 5,
            "retweets": 0,
            "likes": 81,
            "views": 1419
        }
    },
    {
        "id": 1761030280949,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-14.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 16,
            "likes": 73,
            "views": 1437
        }
    },
    {
        "id": 1761030278831,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-15.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 9,
            "likes": 102,
            "views": 2099
        }
    },
    {
        "id": 1761030280740,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-16.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 2,
            "likes": 53,
            "views": 1666
        }
    },
    {
        "id": 1761030280635,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-17.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 13,
            "likes": 98,
            "views": 722
        }
    },
    {
        "id": 1761030280531,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "video",
                "url": "assets/media-18.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 2,
            "likes": 44,
            "views": 875
        }
    },
    {
        "id": 1761030280297,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-19.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 2,
            "likes": 106,
            "views": 2322
        }
    },
    {
        "id": 1761030280192,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-20.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 5,
            "likes": 102,
            "views": 1803
        }
    },
    {
        "id": 1761030280088,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-21.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 11,
            "retweets": 24,
            "likes": 69,
            "views": 671
        }
    },
    {
        "id": 1761030282219,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-22.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 2,
            "likes": 33,
            "views": 586
        }
    },
    {
        "id": 1761030279984,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-23.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 7,
            "likes": 43,
            "views": 2242
        }
    },
    {
        "id": 1761030279880,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-24.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 0,
            "likes": 59,
            "views": 1803
        }
    },
    {
        "id": 1761030279670,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-25.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 1,
            "likes": 11,
            "views": 1951
        }
    },
    {
        "id": 1761030279566,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-26.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 7,
            "likes": 79,
            "views": 906
        }
    },
    {
        "id": 1761030279354,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-27.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 6,
            "likes": 38,
            "views": 545
        }
    },
    {
        "id": 1761030279248,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-28.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 17,
            "likes": 96,
            "views": 1106
        }
    },
    {
        "id": 1761030279141,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-29.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 19,
            "likes": 17,
            "views": 1675
        }
    },
    {
        "id": 1761030279037,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-30.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 5,
            "retweets": 24,
            "likes": 24,
            "views": 1541
        }
    },
    {
        "id": 1761030278936,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-31.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 17,
            "likes": 30,
            "views": 1875
        }
    },
    {
        "id": 1761030278727,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-32.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 22,
            "likes": 82,
            "views": 2249
        }
    },
    {
        "id": 1761030278623,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-33.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 7,
            "likes": 71,
            "views": 2159
        }
    },
    {
        "id": 1761030278519,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "video",
                "url": "assets/media-34.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 24,
            "likes": 19,
            "views": 1372
        }
    },
    {
        "id": 1761030281689,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-35.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 14,
            "likes": 44,
            "views": 517
        }
    },
    {
        "id": 1761030278409,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-36.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 19,
            "likes": 72,
            "views": 887
        }
    },
    {
        "id": 1761030278191,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-37.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 24,
            "likes": 16,
            "views": 972
        }
    },
    {
        "id": 1761030279776,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-38.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 0,
            "likes": 48,
            "views": 1896
        }
    },
    {
        "id": 1761030278087,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-39.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 9,
            "likes": 56,
            "views": 1603
        }
    },
    {
        "id": 1761030277979,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-40.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 17,
            "likes": 37,
            "views": 2319
        }
    },
    {
        "id": 1761030277865,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-41.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 2,
            "likes": 109,
            "views": 691
        }
    },
    {
        "id": 1761030277758,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-42.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 22,
            "likes": 20,
            "views": 830
        }
    },
    {
        "id": 1761030277653,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-43.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 10,
            "likes": 27,
            "views": 1131
        }
    },
    {
        "id": 1761030277549,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-44.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 22,
            "likes": 69,
            "views": 1582
        }
    },
    {
        "id": 1761030277441,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-45.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 6,
            "likes": 28,
            "views": 1570
        }
    },
    {
        "id": 1761030277334,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-46.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 11,
            "retweets": 24,
            "likes": 69,
            "views": 2496
        }
    },
    {
        "id": 1761030277230,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-47.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 9,
            "likes": 15,
            "views": 2462
        }
    },
    {
        "id": 1761030277125,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-48.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 4,
            "likes": 18,
            "views": 1491
        }
    },
    {
        "id": 1761030277021,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-49.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 6,
            "likes": 73,
            "views": 1173
        }
    },
    {
        "id": 1761030276914,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-50.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 2,
            "likes": 88,
            "views": 1877
        }
    },
    {
        "id": 1761030276810,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-51.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 24,
            "likes": 89,
            "views": 1650
        }
    },
    {
        "id": 1761030276706,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-52.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 5,
            "likes": 61,
            "views": 785
        }
    },
    {
        "id": 1761030276493,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-53.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 23,
            "likes": 76,
            "views": 1054
        }
    },
    {
        "id": 1761030276389,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-54.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 9,
            "likes": 57,
            "views": 923
        }
    },
    {
        "id": 1761030276278,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-55.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 13,
            "likes": 34,
            "views": 2423
        }
    },
    {
        "id": 1761030276170,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-56.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 8,
            "likes": 101,
            "views": 1517
        }
    },
    {
        "id": 1761030279459,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-57.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 20,
            "likes": 32,
            "views": 2369
        }
    },
    {
        "id": 1761030275956,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-58.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 10,
            "likes": 16,
            "views": 1909
        }
    },
    {
        "id": 1761030275849,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-59.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 17,
            "likes": 18,
            "views": 1047
        }
    },
    {
        "id": 1761030275743,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-60.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 2,
            "likes": 79,
            "views": 671
        }
    },
    {
        "id": 1761030275637,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-61.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 1,
            "likes": 35,
            "views": 1257
        }
    },
    {
        "id": 1761030275530,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-62.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 8,
            "likes": 57,
            "views": 1921
        }
    },
    {
        "id": 1761030275423,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-63.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 5,
            "retweets": 22,
            "likes": 44,
            "views": 1394
        }
    },
    {
        "id": 1761030275316,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-64.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 23,
            "likes": 71,
            "views": 2045
        }
    },
    {
        "id": 1761030275209,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-65.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 13,
            "likes": 51,
            "views": 614
        }
    },
    {
        "id": 1761030275101,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-66.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 12,
            "likes": 47,
            "views": 1521
        }
    },
    {
        "id": 1761030274995,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-67.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 22,
            "likes": 108,
            "views": 2254
        }
    },
    {
        "id": 1761030274889,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-68.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 1,
            "likes": 23,
            "views": 772
        }
    },
    {
        "id": 1761030282112,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-69.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 10,
            "likes": 74,
            "views": 1974
        }
    },
    {
        "id": 1761030274784,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-70.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 9,
            "likes": 70,
            "views": 1169
        }
    },
    {
        "id": 1761030274678,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-71.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 14,
            "likes": 43,
            "views": 1581
        }
    },
    {
        "id": 1761030274570,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-72.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 14,
            "likes": 92,
            "views": 2440
        }
    },
    {
        "id": 1761030274459,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-73.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 24,
            "likes": 73,
            "views": 2054
        }
    },
    {
        "id": 1761030274354,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-74.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 10,
            "likes": 13,
            "views": 601
        }
    },
    {
        "id": 1761030274250,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-75.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 3,
            "likes": 10,
            "views": 1967
        }
    },
    {
        "id": 1761030274144,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "video",
                "url": "assets/media-76.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 1,
            "likes": 60,
            "views": 1069
        }
    }
];

// 全局设置
let globalSettings = {
    "author": "Gate",
    "handle": "@Gate",
    "avatar": "assets/avatar.png"
};

// 获取所有推文
function getTweets() {
    return tweetsData;
}

// 添加新推文
function addTweet(tweet) {
    const newTweet = {
        id: Date.now(),
        ...tweet,
        time: "刚刚",
        stats: {
            comments: Math.floor(Math.random() * 15), // 0-14条评论
            retweets: Math.floor(Math.random() * 25), // 0-24次转发
            likes: Math.floor(Math.random() * 100) + 10, // 10-109个赞
            views: Math.floor(Math.random() * 2000) + 500 // 500-2499次浏览
        }
    };
    tweetsData.unshift(newTweet);
    return newTweet;
}

// 删除推文
function deleteTweet(id) {
    tweetsData = tweetsData.filter(tweet => tweet.id !== id);
}

// 更新推文顺序
function updateTweetOrder(newOrder) {
    tweetsData = newOrder;
}

// 更新推文统计
function updateTweetStats(id, type) {
    const tweet = tweetsData.find(t => t.id === id);
    if (tweet) {
        switch (type) {
            case 'like':
                // 点赞增长：8-35个，模拟真实的点赞爆发
                tweet.stats.likes += Math.floor(Math.random() * 28) + 8;
                // 点赞也会带来一些浏览量
                tweet.stats.views += Math.floor(Math.random() * 50) + 20;
                break;
            case 'retweet':
                // 转发增长：3-15个，转发相对较少但影响大
                tweet.stats.retweets += Math.floor(Math.random() * 13) + 3;
                // 转发会带来更多浏览量和一些点赞
                tweet.stats.views += Math.floor(Math.random() * 100) + 50;
                tweet.stats.likes += Math.floor(Math.random() * 15) + 5;
                break;
            case 'comment':
                // 评论增长：1-8个，评论最少但最有价值
                tweet.stats.comments += Math.floor(Math.random() * 8) + 1;
                // 评论会带来浏览量和一些点赞
                tweet.stats.views += Math.floor(Math.random() * 30) + 15;
                tweet.stats.likes += Math.floor(Math.random() * 10) + 2;
                break;
        }
        return tweet.stats;
    }
    return null;
}

// 获取全局设置
function getGlobalSettings() {
    return globalSettings;
}

// 更新全局设置
function updateGlobalSettings(settings) {
    globalSettings = { ...globalSettings, ...settings };
}