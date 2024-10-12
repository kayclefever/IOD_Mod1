const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze('Cats are stupid.');
console.log(result);    // Score: -2, Comparative: -0.666

console.log('Hello World!');
function helloworld(name){
    return `Hello ${name}`;
}
console.log(helloworld('KayC LeFever'));
