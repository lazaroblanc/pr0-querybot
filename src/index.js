const logger = require('./Logger');
const client = require('./Client');
const onExit = require('signal-exit');
require('dotenv').config();

onExit((code, signal) => {
    logger.info(`${signal} received, shutting down!`);
    client.destroy();
    process.exit(0);
});