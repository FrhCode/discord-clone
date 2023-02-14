// @ts-ignore
const { faker } = require("@faker-js/faker");
const cryptoLib = require("crypto");

let user = [];

for (let index = 0; index < 100; index++) {
  user.push({ id: cryptoLib.randomUUID(), name: faker.name.fullName() });
}

console.log(user);
