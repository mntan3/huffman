define(['three'], function ( THREE ) {
	var scene, camera, renderer;
	var mouth;

	method = {
		initFace: function () {
			//initialize scene
			scene = new THREE.Scene();
			scene.background = new THREE.Color( 0x606060 );
			
			//initialize camera
			camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
			camera.position.set( 0, 0, 100 );
			camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

			//initialize renderer
			renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );

			document.body.appendChild( renderer.domElement );
		
			//Make eyes
			var eyeRadius = 4;
			var eyeColor = 0x000000;
			var eyeX = 8;
			var eyeY = 10;
			var eyeZ = 0;
		
			var eyeCircle1 = new THREE.CircleGeometry( eyeRadius, 32 );
			var eyeCircle2 = new THREE.CircleGeometry( eyeRadius, 32 );
			var eyeMesh = new THREE.MeshBasicMaterial( { color : eyeColor } );
			var eyeLeft = new THREE.Mesh( eyeCircle1, eyeMesh );
			var eyeRight = new THREE.Mesh( eyeCircle2, eyeMesh );
			eyeLeft.position.set( -1 * eyeX, eyeY, eyeZ );
			eyeRight.position.set( eyeX, eyeY, eyeZ );

			//Make mouth
			var mouthColor = 0x000000;
			var mouthCurve = new THREE.QuadraticBezierCurve(
				new THREE.Vector2( -10, -2),
				new THREE.Vector2( 0, -2 ),
				new THREE.Vector2( 10, -2 )
			);

			var mouthPoints = mouthCurve.getPoints( 50 );
			var mouthGeometry = new THREE.BufferGeometry().setFromPoints( mouthPoints );
			var mouthLine = new THREE.LineBasicMaterial( {
				color: mouthColor,
				linewidth: 4
			} );
			mouth = new THREE.Line( mouthGeometry, mouthLine );
			mouth.curve = mouthCurve;
		
			//Add objects to scene
			scene.add( eyeLeft );
			scene.add( eyeRight );
			scene.add( mouth );
			renderer.render( scene, camera );
			return [mouth, renderer, scene, camera];

		}
	};
	return method;


} );

