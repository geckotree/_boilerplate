'use strict';
module.exports = {
	style: {
		expand: true,
		cwd: '<%= buildFolder %>/css/',
		src: 'style.css',
		dest: '<%= buildFolder %>/css/',
		ext: '.min.css'
	},
	ie: {
		expand: true,
		cwd: '<%= buildFolder %>/css/',
		src: 'ie.css',
		dest: '<%= buildFolder %>/css/',
		ext: '.min.css'
	}
};
