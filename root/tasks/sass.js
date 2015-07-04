'use strict';
module.exports = {
	all: {
		options: {
			style: 'expanded',
			sourcemap: true
		},
		files: {
			'<%= pkg.buildFolder %>/css/style.css': '<%= pkg.assetsFolder %>/sass/style.scss',
			'<%= pkg.buildFolder %>/css/ie.css': '<%= pkg.assetsFolder %>/sass/ie.scss'
		}
	}
};
