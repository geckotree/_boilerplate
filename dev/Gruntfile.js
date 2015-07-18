module.exports = function( grunt ) {
	/*
	 * Time taken for grunt tasks
	 */
	require( 'time-grunt' )( grunt );

	/*
	 * Load all Grunt tasks
	 */
	require( 'load-grunt-tasks' )( grunt );
	grunt.loadNpmTasks( 'assemble' );

	/*
	 * Define variables for tasks
	 */
	var vars = {
		pkg: grunt.file.readJSON( 'package.json' ),
		assetsFolder: 'assets',
		assetsBuildFolder: 'assets/build',
		patternsFolder: 'patterns',
		patternsBuildFolder: 'patterns/build',
		emailsFolder: 'emails',
		emailsBuildFolder: 'emails/build'
	};

	/*
	 * Set location to load grunt tasks form
	 */
	vars.config = {
		src: 'tasks/*.js'
	};

	var configs = require( 'load-grunt-configs' )( grunt, vars );

	grunt.initConfig( configs );

	/*
	 * Define tasks
	 */
	grunt.registerTask( 'dev', [
		'css:dev',
		'js:dev',
		'icons',
		'patterns',
		'todo',
		'watch'
	]);

	grunt.registerTask( 'build', [
		'css:build',
		'js:build',
		'icons',
		'images',
		'patterns',
		'todo'
	]);


	grunt.registerTask( 'css:dev', [
		'sass:all',
		'autoprefixer',
		'stripmq',
		'pixrem'
	]);

	grunt.registerTask( 'css:build', [
		'css:dev',
		'css_mqpacker',
		'cssmin'
	]);

	grunt.registerTask( 'js:dev', [
		'modernizr',
		'jshint',
		'concat'
	]);

	grunt.registerTask( 'js:build', [
		'js:dev',
		'uglify'
	]);

	grunt.registerTask( 'icons', [
		'svgstore',
		'replace'
	]);

	//@todo check this over
	grunt.registerTask( 'images', [
		'svgmin:svgImages',
		'svg2png',
		'copy:brandIcons',
		'copy:bitmapImages',
		'imageoptim'
	]);

	grunt.registerTask( 'patterns', [
		'clean:patterns',
		'assemble:patterns'
	]);

	//@todo check this over
	grunt.registerTask( 'emails', [
		'clean:emails',
		'sass:emails',
		'assemble:emails',
		'premailer',
		'clean:emailsTmp',
		'copy:emailImages'
	]);

	grunt.registerTask( 'emailsDev', [
		'emails',
		'watch:emails'
	]);

	grunt.registerTask( 'emailsBuild', [
		'emails',
		'imageoptim:emails'
	]);
};
