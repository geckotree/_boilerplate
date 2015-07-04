'use strict';
module.exports = {
	brandIcons: {
		files: [
			{
				expand: true,
				cwd: '<%= pkg.assetsFolder %>/img/brand-icons/',
				src: [ '*' ],
				dest: '<%= pkg.buildFolder %>/img/brand-icons'
			}
		]
	},
	bitmapImages: {
		files: [
			{
				expand: true,
				cwd: '<%= pkg.assetsFolder %>/img/bitmap/',
				src: [ '*' ],
				dest: '<%= pkg.buildFolder %>/img/bitmap'
			}
		]
	}
};
