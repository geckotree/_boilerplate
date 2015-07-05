'use strict';
module.exports = {
	options: {
		data: '<%= patternsFolder %>/**/*.{json,yml}',
		helpers: '<%= patternsFolder %>/helpers/helper-*.js',
		layoutdir: '<%= patternsFolder %>/src/layouts',
		partials: [ '<%= patternsFolder %>/src/components/**/*.hbs' ]
	},
	styleguide: {
		options: {
			layout: 'styleguide.hbs',
		},
		files: [{
			expand: true,
			cwd: '<%= patternsFolder %>/src/pages',
			src: [
				'styleguide/colours.hbs',
				'styleguide/forms.hbs',
				'styleguide/icons.hbs',
				'styleguide/tables.hbs',
				'styleguide/typography.hbs'
			],
			dest: '<%= patternsBuildFolder %>/'
		}]
	},
	pages: {
		options: {
			layout: 'default.hbs',
		},
		files: [{
			expand: true,
			cwd: '<%= patternsFolder %>/src/pages',
			src: [
				'styleguide/styleguide.hbs',
				'components/*.hbs',
				'pages/*.hbs'
			],
			dest: '<%= patternsBuildFolder %>/'
		}]
	},
};
