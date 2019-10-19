const sass = require('node-sass');

module.exports = function(grunt){

    //Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        sass: {
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: [{
                    'build/styles/main.css': 'src/styles/main.scss'
                }]
            }
        },

        watch: {
            css: {
                files: 'src/styles/*.scss',
                tasks: ['sass']
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['watch', 'sass']);
};
