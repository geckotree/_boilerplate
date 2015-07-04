'use strict';
module.exports = {
	main: {
		src: [
			'<%= pkg.assetsFolder %>/js/utils/*.js',
			'<%= pkg.assetsFolder %>/js/components/*.js',
			'<%= pkg.assetsFolder %>/js/main.js'
		],
		dest: '<%= pkg.buildFolder %>/js/main.js'
	},
	head: {
		src: [
			'<%= pkg.assetsFolder %>/js/lib/*.js'
			// add priority JS like picturefill/lazysizes
			// keep this file smaller so it parses and runs sooner than main
		],
		dest: '<%= pkg.buildFolder %>/js/head.js'
	}
};
