'use strict';
module.exports = {
	options: {
		data: 'patterns/**/*.{json,yml}',
		helpers: 'patterns/helpers/helper-*.js',
		layout: 'patterns/src/layouts/styleguide.hbs',
		partials: [ 'patterns/src/components/**/*.hbs' ]
	},
	pages: {
		files: [{
			expand: true,
			cwd: 'patterns/src/pages',
			src: [ '**/*.hbs' ],
			dest: 'patterns/build/'
		}]
	}
};
