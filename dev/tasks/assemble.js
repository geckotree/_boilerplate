'use strict';
module.exports = {
	options: {
		data: 'patterns/**/*.{json,yml}',
		helpers: 'patterns/helpers/helper-*.js',
		layoutdir: 'patterns/src/layouts',
		partials: [ 'patterns/src/components/**/*.hbs' ]
	},
	styleguide: {
		options: {
			layout: 'styleguide.hbs',
		},
		files: [{
			expand: true,
			cwd: 'patterns/src/pages',
			src: [
				'styleguide/colours.hbs',
				'styleguide/forms.hbs',
				'styleguide/icons.hbs',
				'styleguide/tables.hbs',
				'styleguide/typography.hbs'
			],
			dest: 'patterns/build/'
		}]
	},
	pages: {
		options: {
			layout: 'default.hbs',
		},
		files: [{
			expand: true,
			cwd: 'patterns/src/pages',
			src: [
				'styleguide/styleguide.hbs',
				'components/*.hbs',
				'pages/*.hbs'
			],
			dest: 'patterns/build/'
		}]
	},
};
