'use strict';
module.exports = {
	options: {
		browsers: [ 'last 3 versions', 'ie 8', 'ie 9' ],
		sourcemap: true
	},
	prefix: {
		expand: true,
		flatten: true,
		src: '<%= buildFolder %>/css/style.css',
		dest: '<%= buildFolder %>/css'
	}
};
