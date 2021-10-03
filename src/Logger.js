require('dotenv').config();

class Logger {

    constructor() {
        this.doDebug = process.env.DEBUG == 'true' ? true : false;
        this.doVerbose = process.env.VERBOSE == 'true' ? true : false;

        this.debug('Called constructor() on Logger');
        this.debug('Debug messages are enabled');
        this.verbose('Verbose messages are enabled');
    }

    logMessage(level, message) {

        let logLevelColor = '';
        switch (level) {
            case 'warn':
                logLevelColor = '\x1b[33m'; // Yellow
                break;

            case 'error':
                logLevelColor = '\x1b[31m'; // Red
                break;

            case 'done':
                logLevelColor = '\x1b[32m'; // Green
                break;

            case 'debug':
                logLevelColor = '\x1b[35m'; // Magenta
                break;

            default:
                break;
        }

        console.log(`${this.getDate()} ${logLevelColor}(${level.toUpperCase()}) ${message}\x1b[0m`);
    }

    error(message) {
        this.logMessage('error', message);
    }

    warn(message) {
        this.logMessage('warn', message);
    }

    done(message) {
        this.logMessage('done', message);
    }

    info(message) {
        this.logMessage('info', message);
    }

    debug(message) {
        if (this.doDebug)
            this.logMessage('debug', message);
    }

    verbose(message) {
        if (this.doVerbose)
            this.logMessage('verbose', message);
    }

    getDate() {
        const date = new Date();

        let year = date.getFullYear().toString().padStart(2, '0');
        let month = date.getMonth().toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        let hour = date.getHours().toString().padStart(2, '0');
        let min = date.getMinutes().toString().padStart(2, '0');
        let sec = date.getSeconds().toString().padStart(2, '0');
        let ms = date.getMilliseconds().toString().padStart(2, '0');

        return `${year}-${month}-${day} ${hour}:${min}:${sec}.${ms}`;
    }

}

module.exports = new Logger();