'use strict';
module.exports = {
	all: {
		files: {
			'<%= assetsBuildFolder %>/js/main.js': '<%= assetsBuildFolder %>/js/main.js'
		}
	},
	inline: {
		files: {
			'<%= assetsBuildFolder %>/js/lib/loadFont.js': '<%= assetsFolder %>/js/lib/loadFont.js',
			'<%= assetsBuildFolder %>/js/lib/googleAnalytics.js': '<%= assetsFolder %>/js/lib/googleAnalytics.js'
		}
	}
};
