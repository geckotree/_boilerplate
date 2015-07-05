'use strict';
module.exports = {
	options: {
		map: false,
	},
	style: {
		expand: true,
		cwd: '<%= buildFolder %>/css/',
		src: 'style.css',
		dest: '<%= buildFolder %>/css/'
	}
};
