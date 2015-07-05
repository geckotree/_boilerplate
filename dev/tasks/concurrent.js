'use strict';
module.exports = {
	cssDev: [
		'sass',
		'autoprefixer',
		'stripmq',
		'pixrem'
	],
	cssBuild: [
		'sass',
		'autoprefixer',
		'stripmq',
		'pixrem',
		'css_mqpacker',
		'cssmin'
	],
	jsDev: [
		'modernizr',
		'jshint',
		'concat'
	],
	jsBuild: [
		'modernizr',
		'jshint',
		'concat',
		'uglify'
	],
	images: [
		'svgmin:svg',
		'svg2png',
		'copy:brandIcons',
		'copy:bitmapImages',
		'imageoptim'
	],
	patterns: [
		'assemble',
		'clean:patterns'
	]
};
