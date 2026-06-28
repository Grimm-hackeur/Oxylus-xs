const { cmd } = require('../DianaTech');
const axios = require('axios');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "queenlora"],
    desc: "Show QUEEN LORA repo with live stats",
    category: "main",
    react: "👑",
    filename: __filename
},
async (conn, mek, m, { from }) => {

try {

// 🔗 GitHub API BY DIANA TEC
const repoUrl = "https://api.github.com/repos/QUEEN-DIANA/QUEEN-LORA";
const userUrl = "https://api.github.com/users/QUEEN-DIANA";

// 📊 QueeN Lora Fetch data 
const repo = await axios.get(repoUrl);
const user = await axios.get(userUrl);

let stars = repo.data.stargazers_count;
let forks = repo.data.forks_count;
let watchers = repo.data.watchers_count;
let followers = user.data.followers;

let caption = `
╭━━━〔 👑 QUEEN LORA REPO 〕━━━⬣
┃
┃ 👑 *Bot Name:* QUEEN LORA
┃ 🧑‍💻 *Owner:* DIANA TECH
┃ 🔗 *Repo:* https://github.com/QUEEN-DIANA/QUEEN-LORA
┃ 🔐 *Pair Session:* https://queen-lora-session.onrender.com
┃
┃ 📊 *LIVE STATS*
┃ ⭐ Stars: ${stars}
┃ 🍴 Forks: ${forks}
┃ 👀 Watchers: ${watchers}
┃ 👥 Followers: ${followers}
┃
╰━━━━━━━━━━━━━━━━━━⬣

> 🚀 Pair your session & deploy now
> 💎 Fast • Secure • Powerful
`;

await conn.sendMessage(from, {
    image: { url: "https://h.uguu.se/qrfEjBms.jpg" },
    caption: caption,
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363336396621021@newsletter",
            newsletterName: "💗 QUEEN LORA Channel REPO 💗",
            serverMessageId: 143
        }
    }
}, { quoted: mek });

// 🎵 Audio
await conn.sendMessage(from, {
    audio: { url: "https://bandaheali-cdn.koyeb.app/media/bot_1774049994816.mp3" },
    mimetype: "audio/mp4",
    ptt: true
}, { quoted: mek });

} catch (e) {
console.log(e);
await conn.sendMessage(from, { text: "❌ Error fetching repo stats!" }, { quoted: mek });
}

});