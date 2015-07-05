'use strict';
module.exports = {
	all: {
		options: {
			jpegMini: false,
			imageAlpha: false,
			quitAfter: false
		},
		src: [
			'<%= buildFolder %>/img/brand-icons/*.{png,gif,jpg}',
			'<%= buildFolder %>/img/bitmap/*.{png,gif,jpg}',
			'<%= buildFolder %>/img/svg/*.png',
			'<%= buildFolder %>/img/icons/png/*.png'
		]
	}
};
