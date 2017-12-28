requirejs.config({
	baseUrl: 'js',
	shim: { 'vendor/three': { exports: 'THREE' } },
});

requirejs(['parse']);
