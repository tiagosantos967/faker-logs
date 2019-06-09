const { getConfiguration } = require('./config');
const {
  saveLogToFile,
  createLogFile,
  generateLog
} = require('./log');

const FakeLogs = (logConfiguration) => {
  const {
    logLocation,
    logTimer,
    schema
  } = logConfiguration;

  createLogFile(logLocation);

  setInterval(() => {
    const generatedLog = generateLog(schema);

    saveLogToFile(generatedLog, logLocation);
  }, logTimer);
};

FakeLogs.generateLog = generateLog;

module.exports = FakeLogs;
