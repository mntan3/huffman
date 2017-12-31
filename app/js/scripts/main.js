define ( function(require) {
	console.log(" Calling main ");
	function parseInput() {
		console.log( "Parsing input" );
		var sentiment = require("sentiment");
		console.log( typeof sentiment );

		var talkPhrase = document.getElementById('talkText').value;	
		document.getElementById('talkText').value = "";
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
