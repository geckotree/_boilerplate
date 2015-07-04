'use strict';
module.exports = {
	options: {
		map: false,
	},
	style: {
		expand: true,
		cwd: '<%= pkg.buildFolder %>/css/',
		src: 'style.css',
		dest: '<%= pkg.buildFolder %>/css/'
	}
};
