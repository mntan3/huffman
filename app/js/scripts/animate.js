define(function ( require ) {
	var robotFace = require('./init');
	var robotInfo= robotFace.initFace();
	var mouth = robotInfo[0];
	var renderer = robotInfo[1];
	var scene = robotInfo[2];
	var camera = robotInfo[3];
	
	methods = {
		smile: function() {
    		if ( mouth.curve.v1.y >= -5 ) {
				requestAnimationFrame( arguments.callee );
        		mouth.curve.v1.y -= 1;
        		var newMouthPoints = mouth.curve.getPoints( 50 );
        		mouth.geometry = mouth.geometry.setFromPoints( newMouthPoints );
        		mouth.geometry.attributes.position.needsUpdate = true;
    			renderer.render( scene, camera );
    	
			}
		}, 
		frown: function() {

			if ( mouth.curve.v1.y <= 3) {
				requestAnimationFrame( arguments.callee );
				mouth.curve.v1.y += 1;
				var newMouthPoints = mouth.curve.getPoints( 50 );
				mouth.geometry = mouth.geometry.setFromPoints( newMouthPoints );
				mouth.geometry.attributes.position.needsUpdate = true;
				renderer.render( scene, camera );
			}
		}
	}
	return methods;
	
});
