var sentimentFunc = require('sentiment');
function sentiment(s) {
	return sentimentFunc(s);
}

module.exports = sentiment;
