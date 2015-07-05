'use strict';
module.exports = {
	options: {
		file: 'TODO.md',
		marks: [{
			name: 'todo',
			pattern: /@(todo)/,
			color: 'blue'
		}],
		title: '<%= pkg.name %> TODO list:',
		usePackage: true
	},
	src: [
		'<%= assetsFolder %>/js/**/*.js',
		'<%= assetsFolder %>/sass/**/*.scss'
	]
};

