function parseInput() {
	console.log( "Parsing input" );

	var talkPhrase = document.getElementById('talkText').value;	
	document.getElementById('talkText').value = "";
	if ( talkPhrase === 'hi' )
	{
		smile();
	}
	else if ( talkPhrase === 'bad robot' )
	{
		frown();
	}
}

document.getElementById('talkButton').onclick = parseInput;
parseInput();
