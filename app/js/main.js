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
		//initialize geometry
		var geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vector3( - 10, 10, 0 ) );
		geometry.vertices.push( new THREE.Vector3( 10 , 10, 0 ) );
		geometry.vertices.push( new THREE.Vector3( 10, -10 , 0 ) );
		geometry.vertices.push( new THREE.Vector3( -10, - 10, 0 ) );
		geometry.vertices.push( new THREE.Vector3( -10, 10, 0 ) );

		var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

		var line = new THREE.Line( geometry, material );
		scene.add( line );
	}

	function animate() {

		requestAnimationFrame( animate );

    //line.rotation.x += 0.01;
    //line.rotation.y += 0.02;

		renderer.render( scene, camera );

	}

} );
