const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const logger = require('./Logger');

class BotConfiguration {

    constructor() {

        logger.debug('Called constructor() on BotConfiguration');

        let configFileName = 'config.yaml';
        let rootDir = path.resolve(__dirname, '..');
        let configFilePath = path.join(rootDir, configFileName);

        try {
            this.config = yaml.load(fs.readFileSync(`${configFilePath}`, 'utf8'));
            logger.verbose(`Loaded config from ${configFilePath}`);
        }
        catch (error) {
            logger.error(error);
        }

    }
}

module.exports = new BotConfiguration().config;