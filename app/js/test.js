var sentiment = require('sentiment');
var r1 = sentiment('Cats are stupid');
console.log(r1);

var r2 = sentiment('Cats are totally amazing');
console.log(r2);
