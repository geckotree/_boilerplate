'use strict';
module.exports = {
	all: {
		options: {
			jpegMini: false,
			imageAlpha: false,
			quitAfter: false
		},
		src: [
			'<%= pkg.buildFolder %>/img/brand-icons/*.{png,gif,jpg}',
			'<%= pkg.buildFolder %>/img/bitmap/*.{png,gif,jpg}',
			'<%= pkg.buildFolder %>/img/svg/*.png',
			'<%= pkg.buildFolder %>/img/icons/png/*.png'
		]
	}
};
