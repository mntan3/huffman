function parseInput() {
	console.log( "Parsing input" );

	var talkPhrase = document.getElementById('talkText').value;	
	document.getElementById('talkText').value = "";
	var emotion = sentiment(talkPhrase);
	if ( talkPhrase === 'hi' )
	{
		moveMouth(-2);
	}
	else if ( talkPhrase === 'bad robot' )
	{
		moveMouth(-4);
	}
}

document.getElementById('talkButton').onclick = parseInput;
//sentiment("asdfds");
parseInput();
