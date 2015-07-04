'use strict';
module.exports = {
	options: {
		commentStyle: 'u',
		content: {
			'team': [{
				'Web designer & developer': '<%= pkg.contributors[ 0 ].name %>',
				'Site': '<%= pkg.contributors[ 1 ].url %>',
				'Twitter': '@robcsimps',
				'Dribbble': 'https://dribbble.com/robsimpson',
				'Location': 'Oxfordshire, UK'
			},
			{
				'Web designer & developer': '<%= pkg.contributors[ 1 ].name %>',
				'Site': '<%= pkg.contributors[ 1 ].url %>',
				'Twitter': '@kevsimps',
				'Dribbble': 'https://dribbble.com/kevsimpson',
				'Location': 'Portsmouth, UK'
			}],
			'site': [{
				'Version': '<%= pkg.version %>',
				'Site Url': '<%= pkg.homepage %>',
				'Language': 'English',
				'Technology': 'Bower, Grunt, JavaScript, SASS'
			}]
		}
	},
	site: {
		dest: 'humans.txt'
	}
};
