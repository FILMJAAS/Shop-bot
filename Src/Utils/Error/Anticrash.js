const { LogError } = require('../Console/Consoleerror');
const process = require('node:process');

process.on('unhandledRejection', (reason, promise) => {
  LogError({ promise, reason }, 'Unhandled Rejection');
});

process.on('uncaughtException', (error) => {
  LogError(error, 'Uncaught Exception');
});

process.on('uncaughtExceptionMonitor', (error, origin) => {
  LogError({ error, origin }, 'Uncaught Exception Monitor');
});