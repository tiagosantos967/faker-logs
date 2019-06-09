const { set } = require('lodash');
const fs = require('fs');
const touch = require('touch');

const createLog = () => ({});

const saveLogToFile = (log, location)  => {
  //const p = path.join(__dirname+'/../../', location);
  fs.appendFileSync(location, `${JSON.stringify(log)}\n`);
};

const createLogFile = (location) => {
  //const p = path.join(__dirname+'/../../', location);
  touch.sync(location);
}

const iterateLogRequest = (logRequest, callback) => {
  Object.keys(logRequest)
  .forEach((key) => callback(key, logRequest[key]));
};

const addToLog = (log, field, value) => {
  set(log, field, value);
};

module.exports = {
  createLog,
  saveLogToFile,
  createLogFile,
  iterateLogRequest,
  addToLog
};
