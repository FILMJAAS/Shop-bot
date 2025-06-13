const winston = require('winston');
const chalk = require('chalk');

const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    winston.format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});

// ✅ Log INFO
function Loglog(type, message) {
  Logger.info(chalk.green(`[${type}] ${message}`));
}

// ✅ Log WARN
function Logwarn(type, error) {
  Logger.warn(chalk.yellow(`[${type}] ${error.message || error.toString()}`));
}

// ✅ Log ERROR
function LogError(type, message, error) {
    const errorMsg = error?.message || error?.toString() || '';
    const fullMessage = chalk.red(`[${type}] ${message}: ${errorMsg}`);
    Logger.error(fullMessage);
}

module.exports = { Loglog, Logwarn, LogError, Logger };