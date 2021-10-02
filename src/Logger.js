class Logger {
    doDebug;
    doVerbose;

    constructor() {
        this.doDebug = process.env.DEBUG == 'true' ? true : false
        this.doVerbose = process.env.VERBOSE == 'true' ? true : false

        this.debug("Debug output is enabled");
        this.verbose("Verbose output is enabled");
        this.debug("Called constructor() on Logger");
    }

    logMessage(level, message) {

        let logLevel = ""
        switch (level) {
            case 'warn':
                logLevel = `\x1b[33m[${level.toUpperCase()}]`;
                break;

            case 'error':
                logLevel = `\x1b[31m[${level.toUpperCase()}]`;
                break;

            case 'done':
                logLevel = `\x1b[32m[${level.toUpperCase()}]`;
                break;

            case 'debug':
                logLevel = `\x1b[35m[${level.toUpperCase()}]`;
                break;

            default:
                logLevel = `[${level.toUpperCase()}]`;
                break;
        }

        console.log(`${logLevel} ${this.getDate()} ${message}\x1b[0m`);
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
        let hourData = date.getHours();
        let minData = date.getMinutes();
        let secData = date.getSeconds();

        let hour = (hourData < 10 ? "0" : "") + hourData;
        let min = (minData < 10 ? "0" : "") + minData;
        let sec = (secData < 10 ? "0" : "") + secData;

        return "[" + hour + ":" + min + ":" + sec + "]";
    }

}

module.exports = new Logger();