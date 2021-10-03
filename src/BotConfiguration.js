const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const logger = require('./Logger');

class BotConfiguration {

    constructor() {

        logger.debug('Called constructor() on BotConfiguration');

        this._configFileName = 'config.yaml';
        this.config = {
            rootDir: path.resolve(__dirname, '..'),
            filePath: path.join(this._configFileName),
        };

        try {
            this.config = yaml.load(fs.readFileSync(`${this.config.filePath}`, 'utf8'));
        }
        catch (error) {
            logger.error(error);
        }
    }
}

module.exports = new BotConfiguration().config;