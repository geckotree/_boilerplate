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
		'concurrent:cssDev',
		'concurrent:jsDev',
		'concurrent:icons',
		'concurrent:patterns',
		'todo',
		'watch'
	]);

	grunt.registerTask( 'build', [
		'concurrent:cssBuild',
		'concurrent:jsBuild',
		'concurrent:icons',
		'concurrent:images',
		'concurrent:patterns',
		'todo'
	]);

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
