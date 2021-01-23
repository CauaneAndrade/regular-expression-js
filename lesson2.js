const { text } = require('./base');

const regExp1 = /João|Maria/gi;
const regExp2 = /(João|Maria)/gi;

console.log(text.match('João'));
console.log(text.match(regExp1));

console.log(text.replace(regExp1, 'xxx'));
console.log(text.replace(regExp2, '"$1"'));  // -> $1 faz referencia ao valor da regex
// vários grupos → (...)(...)(...) $1 $2 $3

console.log(text.replace(regExp2, function(input) {
    return input.toUpperCase();
}));