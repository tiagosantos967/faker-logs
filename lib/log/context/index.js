const faker = require('faker');
const { get, set } = require('lodash');

const methods = {
  name: require('./name'),
  internet: require('./internet')
};

const getFakerField = (field) => {
  const method = get(faker, field);
  return method ? method() : undefined;
}

const createContext = () => ({});

const addToContext = (context, field) => {
  const method = get(methods, field);
  const result = method ? method(context) : getFakerField(field);
  
  result && set(context, field, result);
  return result;
};

module.exports = {
  createContext,
  addToContext
};
