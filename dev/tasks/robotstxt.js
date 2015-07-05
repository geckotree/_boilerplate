'use strict';
module.exports = {
	site: {
		dest: '.',
		policy: [
			{
				ua: '*',
				disallow: ''
			},
			{
				sitemap: [
					'<%= pkg.homepage %>/sitemap.xml'
				]
			},
			{
				host: '<%= pkg.homepage %>'
			}
		]
	}
};
