require(
[
	'main',
], function parseInput() {
	document.getElementById('talkButton').onclick = parseInput;
	console.log( 'Parsing input' );
	console.log( 'robot' );
	var robot = require('./main');
	console.log( robot );
	var talkPhrase = document.getElementById('talkText').value;
	if ( talkPhrase === 'hi' )
	{
		console.log( 'animate!' );
		robot.animate();
	}
} );

