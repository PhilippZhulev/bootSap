module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus: {
            compile: {
                options: {
                    compress: false,
                    paths: ['src'],
                    import : ['/nib/options.styl']
                },
                files: {
                    'dist/bootSap.css': ['src/*.styl']
                }
            },
            compile_2: {
                options: {
                    compress: true,
                    paths: ['src'],
                    import : ['/nib/options.styl']
                },
                files: {
                    'dist/bootSap.min.css': ['src/*.styl']
                }
            }
        },
        watch: {
            // files: ['src/js/*.js', 'src/css/*.css', 'public/*.html'],
            // tasks: ['cssmin', 'uglify', 'imagemin', 'browserSync']
            //no stylus watcher
            files: ['src/*.styl', 'public/*.css'],
            tasks: ['stylus', 'browserSync']
        },
        browserSync: {
            bsFiles: {
                src: [
                    'public/*',
                    '*.html',
                    'dist/*.styl'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['stylus', 'browserSync', 'watch']);

};
