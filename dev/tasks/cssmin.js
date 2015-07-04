'use strict';
module.exports = {
	style: {
		expand: true,
		cwd: '<%= pkg.buildFolder %>/css/',
		src: 'style.css',
		dest: '<%= pkg.buildFolder %>/css/',
		ext: '.min.css'
	},
	ie: {
		expand: true,
		cwd: '<%= pkg.buildFolder %>/css/',
		src: 'ie.css',
		dest: '<%= pkg.buildFolder %>/css/',
		ext: '.min.css'
	}
};
