'use strict';
module.exports = {
	options: {
		jshintrc: '.jshintrc',
		ignores: [
			'<%= assetsFolder %>/js/lib/*.js'
		]
	},
	all: {
		files: {
			src: [
				'Gruntfile.js',
				'<%= assetsFolder %>/js/**/*.js'
			]
		}
	}
};

