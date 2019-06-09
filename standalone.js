const fakerlogs = require('./lib');
const { getConfiguration } = require('./lib/config')

const logConfiguration = getConfiguration(process.env.FAKER_LOGS_CONFIG_NAME)

fakerlogs(logConfiguration);
