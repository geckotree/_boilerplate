'use strict';
module.exports = {
	css: {
		files: [
			'<%= pkg.assetsFolder %>/sass/**/**/*.scss'
		],
		tasks: [
			'sass',
			'autoprefixer',
			'css_mqpacker',
			'stripmq',
			'pixrem'
		]
	},
	js: {
		files: [
			'<%= pkg.assetsFolder %>/js/**/*.js'
		],
		tasks: [
			'jshint',
			'concat'
		]
	},
	// icons: {
	// 	files: [
	// 		'<%= pkg.assetsFolder %>/img/icons/*.svg'
	// 	],
	// 	tasks: [
	// 		'svgmin:icons',
	// 		'grunticon'
	// 	]
	// },
	patterns: {
		files: [ 'patterns/**/**/*.{hbs,json}' ],
		tasks: [ 'assemble' ]
	}
};
