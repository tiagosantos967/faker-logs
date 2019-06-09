const { getConfiguration } = require('./config');
const {
  saveLogToFile,
  createLogFile,
  generateLog
} = require('./log');

const FakeLogs = (logConfiguration) => {
  const {
    logName,
    logTimer,
    schema
  } = logConfiguration;

  createLogFile(logName);

  setInterval(() => {
    const generatedLog = generateLog(schema);

    saveLogToFile(generatedLog, logName);
  }, logTimer);
};

FakeLogs.generateLog = generateLog;

module.exports = FakeLogs;
