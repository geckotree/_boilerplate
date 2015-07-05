'use strict';
module.exports = {
	svgImages: {
		files: [{
			cwd: '<%= buildFolder %>/img/svg',
			src: [ '*.svg' ],
			dest: '<%= buildFolder %>/img/png'
		}]
	}
};
