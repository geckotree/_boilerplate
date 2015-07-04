'use strict';
module.exports = {
	main: {
        'devFile' : '<%= pkg.assetsFolder %>/bower_components/modernizr/modernizr.js',
        'outputFile' : '<%= pkg.assetsFolder %>/js/lib/modernizr.js',
        'extra' : {
            'printshiv' : false,
            'shiv' : true,
            'load' : false,
            'mq' : false,
            'cssclasses' : true
        },
        extensibility : {
            'addtest' : false,
            'prefixed' : false,
            'teststyles' : false,
            'testprops' : false,
            'testallprops' : false,
            'hasevents' : false,
            'prefixes' : false,
            'domprefixes' : false,
            'cssclassprefix' : ''
        },
        'uglify' : false,
        'tests' : [],
        'parseFiles' : true,
        'files' : {
        	'src' : ['<%= pkg.assetsFolder %>/js/**/*.js','<%= pkg.assetsFolder %>/sass/**/*.scss']
        },
        'matchCommunityTests' : false,
        'customTests' : []
    }
};