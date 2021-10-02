const fs = require("fs");
const pjson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
console.log(`pr0-querybot v${pjson.version}\n`);
require("dotenv").config();
const onExit = require("signal-exit");
const logger = require("./Logger");
const client = require("./Client");
const config = require("./ConfigHandler");

client.login(process.env.BOT_TOKEN);

client.on("ready", async () => {
    let numberOfGuilds = client.guilds.cache.size;
    logger.info(`Bot is running as ${client.user.tag} on ${numberOfGuilds} guild${numberOfGuilds > 1 ? "s" : ""}`);
});

onExit((code, signal) => {
    logger.info(`${signal} received, shutting down!`);
    client.destroy();
    process.exit(0);
});