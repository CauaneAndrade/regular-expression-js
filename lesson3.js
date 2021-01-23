/*
quantifiers
* → opcionais (0 ou n)
+ → obrigatório (1 ou n)
? → opcionais (0 ou 1)

{min, max} → mínimo e máximo de vezes que um caracter pode aparecer
// tem o mesmo resultado → * == {0,} → + == {1,} → ? == {0, 1}
*/

/*
\ → caracter de scape
text.match(/./); → o '.' seria entendido como caracter reservado
text.match(/\./); → agora é literalmente um '.' no texto
*/

const { text, files } = require('./base');

const regExp1 = /João/gi;
console.log(text.match(regExp1));

// temos uma palvra escrita em um formato diferente, mas ainda é a mesma → 'João' e 'Joooooãoooo'
const regExp2 = /Jo+ão+/gi;
console.log(text.match(regExp2));

// forma 1
const regExp3 = /\.(jpg|jpeg)/gi;
for (const file of files) {
    console.log(file, file.match(regExp3));
}

// forma 2
const regExp4 = /\.jpe?g/gi;  // torna o 'e' opcional, podendo ou não aparecer (nenhuma ou 1 vez)
for (const file of files) {
    console.log(file, file.match(regExp4));
}

// exemplo 3
const regExp5 = /\.jpe*g/gi;  // torna o 'e' opcional, podendo ou não aparecer (nenhuma ou n vez)
for (const file of files) {
    console.log(file, file.match(regExp5));
}