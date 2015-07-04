'use strict';
module.exports = {
	options: {
		plugins: [
			{ removeViewBox: false },
			{ removeUselessStrokeAndFill: true },
			{ removeEmptyAttrs: true }
		]
	},
	svgImages: {
		files: [{
			expand: true,
			cwd: '<%= pkg.assetsFolder %>/img/svg',
			src: '*.svg',
			dest: '<%= pkg.buildFolder %>/img/svg',
			ext: '.svg'
		}]
	},
	// icons: {
	// 	files: [{
	// 		expand: true,
	// 		cwd: '<%= pkg.assetsFolder %>/img/icons',
	// 		src: '*.svg',
	// 		dest: '<%= pkg.buildFolder %>/img/icons/svg',
	// 		ext: '.svg'
	// 	}]
	// }
};
