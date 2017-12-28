requirejs.config({
	baseUrl: 'js',
	shim: { 'vendor/three': { exports: 'THREE' } },
	app: './'
});

requirejs(['main']);
