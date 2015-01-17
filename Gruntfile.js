module.exports = function( grunt ) {

	grunt.initConfig({
		bump: {
			options: {
				files: [ 'packages.json', 'root/assets/sass/style.scss' ],
				commit: true,
				commitFiles: [ '-a' ],
				createTag: true,
				push: true,
				pushTo: 'origin'
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-bump' );

};
