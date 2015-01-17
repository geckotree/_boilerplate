/* global exports: true */
var fs = require( 'fs' );

exports.description = "Creates the Geckotree front-end boilerplate.";

exports.template = function( grunt, init, done ) {
	init.process( {}, [
		init.prompt( 'name' )
	], function( err, props ) {
		var files = init.filesToCopy( props );

		init.copyAndProcess( files, props );
	});
};