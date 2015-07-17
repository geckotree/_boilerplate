'use strict';
module.exports = {
	cssDev: [
		'sass:all',
		'autoprefixer',
		'stripmq',
		'pixrem'
	],
	cssBuild: [
		'sass:all',
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
	icons: [
		'svgstore'
	],
	images: [
		'svgmin:svgImages',
		'svg2png',
		'copy:brandIcons',
		'copy:bitmapImages',
		'imageoptim'
	],
	patterns: [
		'clean:patterns',
		'assemble:patterns'
	]
};
