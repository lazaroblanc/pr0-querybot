const Discord = require('discord.js');
const logger = require('./Logger');
const path = require('path');

logger.debug(`Called ${path.basename(__filename)}`);

let client = new Discord.Client({
    intents: [],
    presence: {
        status: 'online'
    }
});

client.login(process.env.BOT_TOKEN);

client.on('ready', async () => {
    logger.debug('Client emitted ready');
    let numberOfGuilds = client.guilds.cache.size;
    logger.info(`Bot is running as ${client.user.tag} on ${numberOfGuilds} guild${numberOfGuilds > 1 ? 's' : ''}`);
});

module.exports = client;