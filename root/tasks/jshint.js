'use strict';
module.exports = {
	options: {
		jshintrc: '.jshintrc',
		ignores: [
			'<%= pkg.assetsFolder %>/js/lib/*.js'
		]
	},
	all: {
		files: {
			src: [
				'Gruntfile.js',
				'<%= pkg.assetsFolder %>/js/**/*.js'
			]
		}
	}
};

