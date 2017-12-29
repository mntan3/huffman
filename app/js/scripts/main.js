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
		if ( talkPhrase === 'hi' )
		{
			console.log( 'animate!' );
			var robot = require('./animate');
			console.log(robot);
			robot.smile();
			//robot.animate();
		}
	}
	document.getElementById('talkButton').onclick = parseInput;
} );
