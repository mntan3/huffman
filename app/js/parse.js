function parseInput() {
	console.log( 'HI' );
	var robot = require('./main');
	console.log( robot );
	var talkPhrase = document.getElementById('talkForm').value;
	if ( talkPhrase === 'hi' )
	{
		robot.animate();
	}
}

document.getElementById('talkForm').onclick = parseInput();
