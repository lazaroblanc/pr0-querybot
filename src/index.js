const logger = require('./Logger');
const client = require('./Client');
const onExit = require('signal-exit');
require('dotenv').config();

client.login(process.env.BOT_TOKEN);

client.on('ready', async () => {
    let numberOfGuilds = client.guilds.cache.size;
    logger.info(`Bot is running as ${client.user.tag} on ${numberOfGuilds} guild${numberOfGuilds > 1 ? 's' : ''}`);
});

onExit((code, signal) => {
    logger.info(`${signal} received, shutting down!`);
    client.destroy();
    process.exit(0);
});