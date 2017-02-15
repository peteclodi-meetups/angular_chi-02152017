// Generated on 2015-03-18 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/**/*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
    });

    // Configurable paths for the application
    var appConfig = {
        app: './src',
        assets: 'assets',
        dist: './dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({
        appConfig: appConfig,
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= appConfig.app %>/index.html', '<%= appConfig.app %>/**/*.js'],
                tasks: ['newer:copy:app']
            },
            views: {
                files: ['<%= appConfig.app %/**/*.html'],
                tasks: ['newer:copy:app']
            },
            sass: {
                files: ['<%= appConfig.app %>/**/*.{scss}'],
                tasks: ['sass:app']
            }
        },

        // Empties folders to start fresh
        clean: {
            app: '<%= appConfig.assets %>',
            dist: '<%= appConfig.dist %>',
        },

        sass: {
            options: {
                lineNumbers: false,
                sourceMap: false,
                outputStyle: 'nested',
                sourceComments: true,
                includePaths: [
                    'node_modules'
                ]
            },
            app: {
                files: [{
                    'expand': true,
                    'cwd': '<%= appConfig.app %>',
                    'src': [
                        '**/*.scss',
                        '**/*.*.scss'
                    ],
                    'dest': '<%= appConfig.assets %>',
                    'ext': '.css',
                    'flatten': false
                }]
            },
            build: {
                files: [{
                    'expand': true,
                    'cwd': '<%= appConfig.app %>',
                    'src': [
                        '**/*.scss',
                        '**/*.*.scss'
                    ],
                    'dest': '<%= appConfig.dist %>',
                    'ext': '.css',
                    'flatten': false
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            app: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= appConfig.app %>',
                        dest: '<%= appConfig.assets %>',
                        src: [
                            '**/*.ico',
                            '**/*.html',
                            '**/*.js'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: './',
                        dest: '<%= appConfig.assets %>',
                        src: [
                            'node_modules/core-js/client/shim.min.js',
                            'node_modules/zone.js/dist/zone.js',
                            'node_modules/rxjs/bundles/Rx.js',
                            'node_modules/@angular/core/bundles/core.umd.js',
                            'node_modules/@angular/common/bundles/common.umd.js',
                            'node_modules/@angular/compiler/bundles/compiler.umd.js',
                            'node_modules/@angular/forms/bundles/forms.umd.js',
                            'node_modules/@angular/http/bundles/http.umd.js',
                            'node_modules/@angular/material/bundles/material.umd.js',
                            'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
                            'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js'
                        ]
                    }
                ]
            },
            build: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= appConfig.app %>',
                        dest: '<%= appConfig.dist %>',
                        src: [
                            '**/*.ico',
                            '**/*.html',
                            '**/*.js'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: './',
                        dest: '<%= appConfig.dist %>',
                        src: [
                            'node_modules/core-js/client/shim.min.js',
                            'node_modules/zone.js/dist/zone.js',
                            'node_modules/rxjs/bundles/Rx.js',
                            'node_modules/@angular/core/bundles/core.umd.js',
                            'node_modules/@angular/common/bundles/common.umd.js',
                            'node_modules/@angular/compiler/bundles/compiler.umd.js',
                            'node_modules/@angular/forms/bundles/forms.umd.js',
                            'node_modules/@angular/http/bundles/http.umd.js',
                            'node_modules/@angular/material/bundles/material.umd.js',
                            'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
                            'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js'
                        ]
                    }
                ]
            }
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'copy:build',
        'sass:build'
    ]);

    grunt.registerTask('local', [
        'clean:app',
        'copy:app',
        'sass:app',
        'watch',
    ]);
};
