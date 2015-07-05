'use strict';
module.exports = {
	all: {
		options: {
			style: 'expanded',
			sourcemap: true
		},
		files: {
			'<%= buildFolder %>/css/style.css': '<%= assetsFolder %>/sass/style.scss',
			'<%= buildFolder %>/css/ie.css': '<%= assetsFolder %>/sass/ie.scss'
		}
	}
};
