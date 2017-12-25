require( {
	baseUrl: 'js',
    // three.js should have UMD support soon, but it currently does not
	shim: { 'vendor/three': { exports: 'THREE' } }
}, [
	'vendor/three'
], function ( THREE ) {

	var scene, camera, renderer;

	initApp();
	initObjects();
	animate();

	function initApp() {
		//initialize scene
		scene = new THREE.Scene();
		
		//initialize camera
		camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
		camera.position.set( 0, 0, 100 );
		camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

		//initialize renderer
		renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );

		document.body.appendChild( renderer.domElement );

	}

	function initObjects() {
		//Make face
		var faceSize = 40;
		var faceColor = 0x606060;
		var faceX = 0;
		var faceY = 0;
		var faceZ = 0;

		var faceBox = new THREE.BoxGeometry( faceSize, faceSize, 1 );
		var faceMesh = new THREE.MeshBasicMaterial( { color: faceColor } );
		faceMesh.renderOrder = faceZ;
		faceMesh.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
		var face = new THREE.Mesh( faceBox, faceMesh );
		face.position.set( faceX, faceY, faceZ );

		//Make eyes
		var eyeRadius = 6;
		var eyeColor = 0xffffffff;
		var eyeX = 8;
		var eyeY = 10;
		var eyeZ = 1;
		
		var eyeCircle1 = new THREE.CircleGeometry( eyeRadius, 32 );
		var eyeCircle2 = new THREE.CircleGeometry( eyeRadius, 32 );
		var eyeMesh = new THREE.MeshBasicMaterial( { color : eyeColor } );
		var eyeLeft = new THREE.Mesh( eyeCircle1, eyeMesh );
		var eyeRight = new THREE.Mesh( eyeCircle2, eyeMesh );
		eyeLeft.position.set( -1 * eyeX, eyeY, eyeZ );
		eyeRight.position.set( eyeX, eyeY, eyeZ );
		
		//Add objects to scene
		scene.add( face );
		scene.add( eyeLeft );
		scene.add( eyeRight );
	}

	function animate() {

		requestAnimationFrame( animate );

    //line.rotation.x += 0.01;
    //line.rotation.y += 0.02;

		renderer.render( scene, camera );

	}

} );
