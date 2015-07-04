'use strict';
module.exports = {
	main: {
		src: [
			'<%= pkg.assetsFolder %>/js/utils/*.js',
			'<%= pkg.assetsFolder %>/js/components/*.js',
			'<%= pkg.assetsFolder %>/js/main.js'
		],
		dest: '<%= pkg.buildFolder %>/js/main.js'
	}
};
