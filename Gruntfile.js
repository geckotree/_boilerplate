module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*
         * WATCH
         */
        watch: {
            css: {
                files: ['assets/sass/*/*.scss'],
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
                    'assets/css/style.css': 'assets/sass/style.scss',
                    'assets/css/style-ie.css': 'assets/sass/style-ie.scss'
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
                src: 'assets/css/style.css',
                dest: 'assets/css/'
            }
        },
        css_mqpacker: {
            options: {
                map: false
            },
            main: {
                expand: true,
                cwd: 'assets/css/',
                src: 'style.css',
                dest: 'assets/css/'
            }
        },
        stripmq: {
            options: {
                width: '65em',
                type: 'screen'
            },
            all: {
                files: {
                    'assets/css/style-ie.css': ['assets/css/style-ie.css']
                }
            }
        },
        pixrem: {
            options: {
              rootvalue: '62.5%',
              replace: true
            },
            dist: {
              src: 'assets/css/style-ie.css',
              dest: 'assets/css/style-ie.css'
            }
        },
        cssmin: {
            main: {
                expand: true,
                cwd: 'assets/css/',
                src: '*.css',
                dest: 'assets/build/css/',
                ext: '.min.css'
            }
        },


        /*
         * JS
         */
        concat: {
            dist: {
                src: ['assets/js/*.js'],
                dest: 'assets/build/js/script.min.js'
            }
        },
        uglify: {
            build: {
                src: 'assets/build/js/script.min.js',
                dest: 'assets/build/js/script.min.js'
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
                    cwd: 'assets/img/bitmap/',
                    src: ['*.{gif,jpg,png}'],
                    custom_dest: 'assets/build/img/bitmap/{%= width %}/'
                }]
            }
        },
        svg2png: {
            all: {
                files: [{ 
                    cwd: 'assets/img/svg/', 
                    src: ['*.svg'], 
                    dest: 'assets/build/img/svg/'
                }]
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
                    cwd: 'assets/img/svg/',
                    src: '*.svg',
                    dest: 'assets/build/img/svg/',
                    ext: '.svg'
                }]
            }
        },
        imageoptim: {
            myTask: {
                options: {
                    jpegMini: false,
                    imageAlpha: false,
                    quitAfter: false
                },
                src: [
                    'assets/build/img/bitmap/*.{png,gif,jpg}',
                    'assets/build/img/svg/*.png'
                ]
            }
        },


        /*
         * MISC
         */
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['assets/build/css/*.css', 'assets/build/js/*.js', '*.php']
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
    grunt.loadNpmTasks('grunt-svg2png');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-imageoptim');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');


    grunt.registerTask('dev', [
        'css',
        'js',
        'browserSync',
        'watch'
    ]);

    grunt.registerTask('build', [
        'css',
        'js',
        'images'
    ]);


    grunt.registerTask('css', [
        'sass', 
        'autoprefixer', 
        'css_mqpacker', 
        'stripmq', 
        'pixrem', 
        'cssmin'
    ]);

    grunt.registerTask('js', [
        'concat',
        'uglify'
    ]);

    grunt.registerTask('images', [
        'responsive_images',
        'svg2png',
        'svgmin',
        'imageoptim'
    ]);
};