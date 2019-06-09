const faker = require('faker');
const { get } = require('lodash');

const firstName = (context) => {
  return faker.name.firstName(get(context, 'name.gender'));
}

module.exports = {
  firstName
}