'use strict';
module.exports = {
	svgImages: {
		files: [{
			cwd: '<%= pkg.buildFolder %>/img/svg',
			src: [ '*.svg' ],
			dest: '<%= pkg.buildFolder %>/img/png'
		}]
	}
};
