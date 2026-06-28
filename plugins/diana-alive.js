const { cmd, commands } = require('../DianaTech');
const os = require("os");
const config = require('../config');

cmd({
    pattern: "alive2",
    alias: ["status", "live"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🟢",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {

        const totalCmds = commands.length;

        // ⏱️ UPTIME
        const sec = process.uptime();
        const h = Math.floor(sec / 3600);
        const min = Math.floor((sec % 3600) / 60);
        const s = Math.floor(sec % 60);
        const uptime = `${h}h ${min}m ${s}s`;

        // 📅 DATE
        const now = new Date();
        const date = now.toLocaleDateString(); // day / month / year

        // ⏰ TIME
        const time = now.toLocaleTimeString(); // hour / minute / second

        const status = `
╭━━━〔 ⚡ *OXYLUS XS* ⚡ 〕━━━⬣
┃
┃ 🤖 *Bot:* OXYLUS XS 
┃ 👑 *Owner:* ${config.OWNER_NAME || "XENIX OFFICIAL"}
┃ 🌐 *Mode:* ${config.MODE || "public"}
┃ 🔹 *Prefix:* ${config.PREFIX || "."}
┃ 💻 *Platform:* ${os.platform()}
┃ 🧩 *Commands:* ${totalCmds}
┃
┃ ⏱️ *Uptime:* ${uptime}
┃ 📅 *Date:* ${date}
┃ ⏰ *Time:* ${time}
┃
┃ 🚀 *Speed:* Ultra Fast ⚡
┃ 🧠 *Version:* 3.0 Pro
┃
╰━━━━━━━━━━━━━━━━━━⬣

『 🟢 *STATUS: ONLINE & ACTIVE* 』

> ⚡ Powered by XENIX
> 💎 Premium WhatsApp Bot 😈
`;

        await conn.sendMessage(from, {
            image: { url: "https://files.catbox.moe/p6tij3.jpg" },
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363421117788420@newsletter",
                    newsletterName: "XENIX OFFICIAL",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});