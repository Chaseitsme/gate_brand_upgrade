// 预置推文文案
const presetTexts = [
    `💥Gate "Cash-In Wednesday" is here
Wednesday Exclusive · For Newcomers
Invite 1 friend to sign up = Get $5 cash instantly!`,

    `Gate is taking over @Token2049 week — back-to-back, non-stop vibes!

🎶 Token of Love Music Festival (Oct 1)  
🏁 Gate Singapore Grand Prix Reception (Oct 2)  
🥂 Gate VIP Dinner (Oct 2)  
🏎️ VIP F1 Experience (Oct 3–5)`,

    `Gate Initial Listing: $DL 

🔹 Trading Pair: $DL / $USDT
🔹 Trading Starts: 12:00 PM, September 19th (UTC)`,

    `$GUSD dual earnings, with APR up to 19.05%

1️⃣Mint $GUSD and earn 4.4% APR
2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour`,

    `Simple Earn Crazy Wednesday #6 is Live! 

$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT

Extra 10% $USDT Rate-Up Voucher for participants`,

    `"The Power of Now" wrapped in Dubai 🌟

Crypto, AI, art & Web3 all in one room — sparks were flying!

Not just an event, it's a community moment!

Gate Group is where culture meets innovation.`,

    `🥂 Gate Exclusive VIP Dinner

An intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.`,

    `🏎️ VIP F1 Experience

Feel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!

📈 Sometimes the charts aren't testing your skills… they're testing your patience.`,

    `Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!

$100,000 prize pool up for grabs, with up to $8,000 per winner.

Whether you're new or pro, there's a prize for you:
✅ 10 $USDT for your first correct prediction
✅ $70,000 for top-ranked players`
];

// 获取随机预置文案
function getRandomPresetText() {
    const randomIndex = Math.floor(Math.random() * presetTexts.length);
    return presetTexts[randomIndex];
}

// 获取所有预置文案
function getAllPresetTexts() {
    return presetTexts;
}