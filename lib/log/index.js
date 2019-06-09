const { createContext, addToContext } = require('./context');
const { 
  createLog,
  saveLogToFile,
  createLogFile,
  iterateLogRequest,
  addToLog 
} = require('./utils.js');

const generateLog = (logTemplate) => {
  const log = createLog();
  const context = createContext();

  iterateLogRequest(
    logTemplate,
    (key, field) => {
      const result = addToContext(context, field);
      addToLog(log, key, result);
    }
  );

  return log;
}

module.exports = {
  saveLogToFile,
  createLogFile,
  generateLog
};
