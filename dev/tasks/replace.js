'use strict';
module.exports = {
	main: {
        options: {
            patterns: [
                {
                    match: 'icons',
                    replacement: '<%= grunt.file.read( "assets/build/img/icons/icons.svg" )%>',
                    expression: false
                }
            ]
        },
        files: {
            'index.html': 'index.html.src'
        }
    },
};
