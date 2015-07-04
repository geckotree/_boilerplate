'use strict';
module.exports = {
	options: {
		width: '62.5em',
		type: 'screen'
	},
	ie: {
		files: {
			'<%= pkg.buildFolder %>/css/ie.css': [ '<%= pkg.buildFolder %>/css/ie.css' ]
		}
	}
};
