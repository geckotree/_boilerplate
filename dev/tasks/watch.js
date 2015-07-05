'use strict';
module.exports = {
	css: {
		files: [
			'<%= assetsFolder %>/sass/**/**/*.scss'
		],
		tasks: [
			'newer:sass',
			'newer:autoprefixer',
			'newer:stripmq',
			'newer:pixrem'
		]
	},
	js: {
		files: [
			'<%= assetsFolder %>/js/**/*.js'
		],
		tasks: [
			'newer:jshint',
			'newer:concat'
		]
	},
	patterns: {
		files: [ '<%= patternsFolder %>/**/**/*.{hbs,json}' ],
		tasks: [ 'newer:assemble' ]
	},
	todo: {
		files: [
			'<%= assetsFolder %>/js/**/*.js',
			'<%= assetsFolder %>/sass/**/*.scss'
		],
		tasks: [ 'todo' ]
	}
};
