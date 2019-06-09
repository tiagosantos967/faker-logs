const { generateLog } = require('../lib');

console.log(generateLog({
  "firstName": "name.firstName",
  "lastName": "name.lastName",
  "email": "internet.email",
  "userName": "internet.userName",
  "dob": "date.past"
}));
