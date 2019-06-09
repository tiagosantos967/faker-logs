const { set } = require('lodash');
const fs = require('fs');
const touch = require('touch');
const path = require('path');

const createLog = () => ({});

const saveLogToFile = (log, location)  => {
  const p = path.join(__dirname+'/../../logs/', location);
  fs.appendFileSync(p, `${JSON.stringify(log)}\n`);
};

const createLogFile = (location) => {
  const p = path.join(__dirname+'/../../logs/', location);
  touch.sync(p);
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
