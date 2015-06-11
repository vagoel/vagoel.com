module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                    'shared/themes/reset.css','shared/themes/clearfix.css','shared/themes/default/css/core/style.css','shared/themes/default/css/scheme/default.css'
                ],
                dest: '../combined.css'
            },
            js: {
                src: [
                    'shared/scripts/slick.js','shared/scripts/scrollTo.js','shared/themes/default/js/functions.js'
                ],
                dest: '../combined.js'
            }
        },
        cssmin: {
            css: {
                src: '../combined.css',
                dest: '../combined.min.css'
            }
        },
        uglify: {
            js: {
                files: {
                    '../combined.js': ['../combined.js']
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
    grunt.registerTask('minifyCSS', ['cssmin:css']);
};