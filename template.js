/* global exports: true */
var fs = require( 'fs' );
var exec = require( './lib/exec.js' ).exec;
var Q = require( './lib/q.js' );

exports.description = "Creates the Geckotree front-end boilerplate.";

exports.template = function( grunt, init, done ) {
	init.process( {}, [
		init.prompt( 'name' )
	], function( err, props ) {
		var files = init.filesToCopy( props );

		init.copyAndProcess( files, props );

		return Q.all([
			exec( 'npm install' ),
			exec( 'bower install' )
		]);
	});
};