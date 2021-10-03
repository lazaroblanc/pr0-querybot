const logger = require('./Logger');
const client = require('./Client');
const onExit = require('signal-exit');
const fs = require('fs');
const pjson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
require('dotenv').config();

logger.info(`Starting ${pjson.name} v${pjson.version}`);

onExit((code, signal) => {
    logger.info(`${signal} received, shutting down!`);
    client.destroy();
    process.exit(0);
});