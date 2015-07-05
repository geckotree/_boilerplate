module.exports = function( grunt ) {

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
		buildFolder: 'assets/build'
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
		// 'icons',
		'js:dev',
		'patterns',
		'watch'
	]);

	grunt.registerTask( 'build', [
		'css:build',
		// 'icons',
		'js:build',
		'images',
		'patterns',
		'humans_txt'
	]);


	grunt.registerTask( 'css:dev', [
		'sass',
		'autoprefixer',
		'css_mqpacker',
		'stripmq',
		'pixrem'
	]);

	grunt.registerTask( 'js:dev', [
		'modernizr',
		'jshint',
		'concat'
	]);

	grunt.registerTask( 'css:build', [
		'css:dev',
		'cssmin'
	]);

	grunt.registerTask( 'js:build', [
		'js:dev',
		'uglify'
	]);

	grunt.registerTask( 'patterns', [
		'assemble'
	]);

	// grunt.registerTask( 'icons', [
	// 	'svgmin:icons',
	// ]);

	grunt.registerTask( 'images', [
		'svgmin:svg',
		'svg2png',
		'copy:brandIcons',
		'copy:bitmapImages',
		'imageoptim'
	]);
};
