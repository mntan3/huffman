define( function ( require ) {
	var robotFace = require('./init');
	var robotInfo= robotFace.initFace();
	var mouth = robotInfo[0];
	var renderer = robotInfo[1];
	var scene = robotInfo[2];
	var camera = robotInfo[3];
	console.log(mouth);
	console.log(renderer);
	console.log(scene);
	
	methods = {
		smile: function() {
			requestAnimationFrame( arguments.callee );

    		if ( mouth.curve.v1.y >= -5 ) {
        		mouth.curve.v1.y -= 1;
        		var newMouthPoints = mouth.curve.getPoints( 50 );
        		mouth.geometry = mouth.geometry.setFromPoints( newMouthPoints );
        		mouth.geometry.attributes.position.needsUpdate = true;
    	
			}
    		renderer.render( scene, camera );
		}
	}
	return methods;
	
});
