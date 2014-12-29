module.exports = function(grunt) {
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		site: grunt.file.readYAML('_config.yaml'),
		
		assemble: {
	      site: {
	        src: ['<%= site.pages %>'],
	        dest: '<%= site.dest %>',
	        options: {
		        flatten: true,
		        assets: '<%= site.assets %>',
		        data: '<%= site.data %>/*.{json,yml}',

		        // Templates
		        partials: '<%= site.includes %>',
		        layoutdir: '<%= site.layouts %>',
		        layout: '<%= site.layout %>'
	        },
	      },

		},

		clean: {
			server: ['<%= site.dest %>']
		},

		coffee: {
			compile: {
				files: {
					'<%= site.dest %>/app.js': '<%= site.assets %>/coffeescript/*.coffee'
				}
			}
		},

		concurrent: {
			server: ['less', 'assemble:site', 'coffee:compile'],
		},

		copy: {
			framer: {
				expand: true,
				cwd: '<%= site.assets %>/js/framer/',
				src: '**',
				dest: '<%= site.dest %>/framer/',
				flatten: true
			},
			img: {
				expand: true,
				cwd: '<%= site.assets %>/img/default/',
				src: '*.{png,jpg,gif}',
				dest: '<%= site.dest %>/images/',
				flatten: true
			}
		},

		connect: {
	      options: {
	        port: 9000,
	        livereload: 35729,
	        // change this to '0.0.0.0' to access the server from outside
	        hostname: 'localhost'
	      },
	      livereload: {
	        options: {
	          open: true,
	          base: [
	            '<%= site.dest %>'
	          ]
	        }
	      }
	    },

		less: {
			server: {
				options: {
					paths: ["assets/css"]
				},
					files: {
					"assets/css/main.css": "src/less/main.less"
				},
			},
		},

		replace: {},

		watch: {
			options: {
				livereload: true,
			},
			
			app: {
				files: ['assets/coffeescript/app.coffee'],
				tasks: ['coffee']
			},

			less: {
				files: ['src/less/**/*.less'],
				tasks: ['less'],
				options: {
					livereload: false,
				}
			},

			// css: {
			// 	files: ['<%= site.assets %>/css/*.css'],
			// },

			livereload: {
		        options: {
		          livereload: '<%= connect.options.livereload %>'
		        },
		        files: [
		          '<%= site.dest %>/*.html',
		          '<%= site.projects %>/*.html',
		          '<%= site.assets %>/css/*.css',
		          '<%= site.assets %>/img/*.{gif,jpg,jpeg,png,svg,webp}'
		        ]
		    }
		}
	
	});
	
	grunt.loadNpmTasks('assemble');
	// grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'concurrent:server', 'copy', 'connect', 'watch']);
	grunt.registerTask('dist', ['clean', 'assemble', 'replace:dist']);
}

