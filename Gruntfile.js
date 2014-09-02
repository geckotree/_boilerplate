module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*
         * WATCH
         */
        watch: {
            css: {
                files: ['assets/sass/*/*.scss', '_style-guide/assets/sass/*/*.scss'],
                tasks: ['sass', 'autoprefixer', 'css_mqpacker', 'stripmq', 'cssmin']
            },
            scripts: {
                files: ['assets/js/*/*.js'],
                tasks: ['concat', 'uglify']
            },
            images: {
                files: ['assets/img/photos/dev/*.{gif,jpeg,jpg,png}'],
                tasks: ['responsive_images']
            },
            emails: {
                files: ['emails/src/**/*'],
                tasks: ['']
            }
        },


        /*
         * CSS
         */
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: true
                },
                files: {
                    'assets/css/dev/style.css': 'assets/sass/style.scss',
                    'assets/css/dev/style-ie.css': 'assets/sass/style-ie.scss',
                    '_style-guide/assets/css/style-guide.css': '_style-guide/assets/sass/style-guide.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'assets/css/dev/style.css',
                dest: 'assets/css/dev/'
            }
        },
        css_mqpacker: {
            options: {
                map: false
            },
            main: {
                expand: true,
                cwd: 'assets/css/dev/',
                src: 'style.css',
                dest: 'assets/css/dev/'
            }
        },
        stripmq: {
            options: {
                width: '65em',
                type: 'screen'
            },
            all: {
                files: {
                    'assets/css/dev/style-ie.css': ['assets/css/dev/style-ie.css']
                }
            }
        },
        pixrem: {
            options: {
              rootvalue: '62.5%',
              replace: true
            },
            dist: {
              src: 'assets/css/dev/style-ie.css',
              dest: 'assets/css/dev/style-ie.css'
            }
        },
        cssmin: {
            main: {
                expand: true,
                cwd: 'assets/css/dev/',
                src: 'style.css',
                dest: 'assets/css/build',
                ext: '.min.css'
            }
        },


        /*
         * JS
         */
        concat: {
            dist: {
                src: ['assets/js/dev/*.js'],
                dest: 'assets/js/build/combined.js'
            }
        },
        uglify: {
            build: {
                src: 'assets/js/build/combined.js',
                dest: 'assets/js/build/script.min.js'
            }
        },

        
        /*
         * IMAGES
         */
        responsive_images: {
            options: {
                engine: 'gm',
                rename: true,
                aspectRatio: true,
                gravity: 'center',
                upscale: true,
                separator: '--',
                quality: 50,

                sizes: [{
                    name: 'small',
                    width: 450
                },{
                    name: 'small',
                    width: 675,
                    suffix: '_x2'
                },{
                    name: 'medium',
                    width: 900
                },{
                    name: 'medium',
                    width: 1350,
                    suffix: '_x2'
                },{
                    name: 'large',
                    width: 1200
                },{
                    name: 'large',
                    width: 1800,
                    suffix: '_x2'
                }]
            },
            all: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/photos/dev/',
                    src: ['*.{gif,jpg,png}'],
                    custom_dest: 'assets/img/photos/build/{%= width %}/'
                }]
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'assets/img/photos/build/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'assets/img/photos/build/'
                    }
                ]
            }
        },
        imageoptim: {
            myTask: {
                options: {
                    jpegMini: false,
                    imageAlpha: false,
                    quitAfter: false
                },
                src: ['assets/img/photos/build/**/*.{png,gif,jpg}']
            }
        },
        svgmin: {
            options: {
                plugins: [
                    {removeViewBox: true}, 
                    {removeUselessStrokeAndFill: false},
                    {removeEmptyAttrs: false}
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: '*.svg',
                    dest: 'assets/img/',
                    ext: '.svg'
                }]
            }
        },


        /*
         * MISC
         */
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['assets/css/build/*.css', 'assets/js/build/*.js', '*.php']
                },
                options: {
                    watchTask: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-css-mqpacker');
    grunt.loadNpmTasks('grunt-stripmq');
    grunt.loadNpmTasks('grunt-pixrem');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-svgmin');
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');


    grunt.registerTask('dev', [
        'css:dev',
        'js:dev',
        'images:dev',
        'browserSync',
        'watch'
    ]);

    grunt.registerTask('build', [
        'css:build',
        'js:build',
        'images:build'
    ]);

    grunt.registerTask('css:dev', ['sass', 'autoprefixer', 'css_mqpacker', 'stripmq', 'pixrem']);
    grunt.registerTask('css:build', ['sass', 'autoprefixer', 'css_mqpacker', 'stripmq', 'pixrem', 'cssmin']);

    grunt.registerTask('js:dev', ['concat']);
    grunt.registerTask('js:build', ['concat', 'uglify']);

    grunt.registerTask('images:dev', ['responsive_images']);
    grunt.registerTask('images:build', ['imagemin', 'svgmin', 'imageoptim'])

};