// flag "g" → means global
// flag "i" → means insensitive (lower or upper case insensitive)
// () → groups
// | → or

const { text } = require('./base');

const regExp1 = /João/g;
const found1 = regExp1.test(text);  // -> return a bool
console.log(found1);

const regExp2 = /(Maria|João)(, hoje sua esposa)/g;
const found2 = regExp2.test(text);  // -> return a bool
console.log(found2);

const regExp3 = /(João|Maria)(, hoje sua esposa)/gi;
const found3 = regExp3.exec(text);  // -> return an array
console.log(found3);
