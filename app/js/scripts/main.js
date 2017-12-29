define ( function(require) {
	console.log(" Calling main ");
	//var robotFace = require('./init');
	//console.log( "Initialized ");
	//console.log( robotFace );
	//var mouth = robotFace.initFace();
	//console.log("mouth");
	//console.log( mouth );
	function parseInput() {
		console.log( "Parsing input" );
		var talkPhrase = document.getElementById('talkText').value;	
		console.log( talkPhrase );
		if ( talkPhrase === 'hi' )
		{
			var robot = require('./animate');
			robot.smile();
		}
		else if ( talkPhrase === 'bad robot' )
		{
			var robot = require('./animate');
			robot.frown();
		}
	}
	document.getElementById('talkButton').onclick = parseInput;
} );
