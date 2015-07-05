'use strict';
module.exports = {
	options: {
		width: '62.5em',
		type: 'screen'
	},
	ie: {
		files: {
			'<%= buildFolder %>/css/ie.css': [ '<%= buildFolder %>/css/ie.css' ]
		}
	}
};
