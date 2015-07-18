'use strict';
module.exports = {
	main: {
        options: {
            patterns: [
            	{
                    match: 'loadFont',
                    replacement: '<%= grunt.file.read( "assets/build/js/lib/loadFont.js" )%>',
                    expression: false
                },
                {
                    match: 'icons',
                    replacement: '<%= grunt.file.read( "assets/build/img/icons/icons.svg" )%>',
                    expression: false
                },
                {
                    match: 'googleAnalytics',
                    replacement: '<%= grunt.file.read( "assets/build/js/lib/googleAnalytics.js" )%>',
                    expression: false
                }
            ]
        },
        files: {
            'index.html': 'index.html.src'
        }
    },
};
