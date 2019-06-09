const fs = require('fs');
const path = require('path');

const getConfiguration = (location) => {
  const p = path.join(__dirname+'/../../logs/', location);
  return JSON.parse(fs.readFileSync(p));
};

module.exports = {
  getConfiguration
};
