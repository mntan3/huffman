console.log("starting this");
var sentimentFunc = require('sentiment');
function sentiment(s) {
	return sentimentFunc(s);
}
console.log(sentimentFunc);
console.log(sentiment);
console.log( "ending this" );

