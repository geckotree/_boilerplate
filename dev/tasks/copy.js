'use strict';
module.exports = {
	brandIcons: {
		files: [
			{
				expand: true,
				cwd: '<%= assetsFolder %>/img/brand-icons/',
				src: [ '*' ],
				dest: '<%= buildFolder %>/img/brand-icons'
			}
		]
	},
	bitmapImages: {
		files: [
			{
				expand: true,
				cwd: '<%= assetsFolder %>/img/bitmap/',
				src: [ '*' ],
				dest: '<%= buildFolder %>/img/bitmap'
			}
		]
	}
};
