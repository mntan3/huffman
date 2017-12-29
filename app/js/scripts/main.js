define ( function(require) {
	console.log(" Calling main ");
	function parseInput() {
		console.log( "Parsing input" );
		var talkPhrase = document.getElementById('talkText').value;	
		if ( talkPhrase === 'hi' )
		{
			console.log( 'animate!' );
			var robot = require('./code');
			console.log(robot);
			//robot.animate();
		}
	}
	document.getElementById('talkButton').onclick = parseInput;
} );
