function parseInput() {
	console.log( "Parsing input" );

	var talkPhrase = document.getElementById('talkText').value;	
	document.getElementById('talkText').value = "";
	var emotion = sentiment(talkPhrase);
	console.log(talkPhrase);
	console.log(emotion.score);
	if (talkPhrase != "") {
		moveMouth(-1 * emotion.score);
	}
}

document.getElementById('talkButton').onclick = parseInput;

document.getElementById('talkText').onkeydown = function(event) {
    if (event.keyCode == 13) {
        parseInput();
    }
}

parseInput();
