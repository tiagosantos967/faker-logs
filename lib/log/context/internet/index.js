const faker = require('faker');
const { get } = require('lodash');

const email = (context) => {
  return faker.internet.email(
    get(context, 'name.firstName'),
    get(context, 'name.lastName')
  );
}

const userName = (context) => {
  return faker.internet.userName(
    get(context, 'name.firstName'),
    get(context, 'name.lastName')
  );
}

module.exports = {
  email,
  userName
}