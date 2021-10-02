const Discord = require("discord.js");
const logger = require('./Logger');
const path = require('path');

logger.debug(`Called ${path.basename(__filename)}`);

module.exports = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS],
    presence: {
        status: "online"
    }
});