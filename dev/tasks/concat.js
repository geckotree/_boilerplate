'use strict';
module.exports = {
	main: {
		src: [
			'<%= assetsFolder %>/js/utils/*.js',
			'<%= assetsFolder %>/js/components/*.js',
			'<%= assetsFolder %>/js/main.js'
		],
		dest: '<%= buildFolder %>/js/main.js'
	},
	head: {
		src: [
			'<%= assetsFolder %>/js/lib/*.js'
			// add priority JS like picturefill/lazysizes
			// keep this file smaller so it parses and runs sooner than main
		],
		dest: '<%= buildFolder %>/js/head.js'
	}
};
