const fs = require('fs');

const getConfiguration = (location) => {
  return JSON.parse(fs.readFileSync(location));
};

module.exports = {
  getConfiguration
};
