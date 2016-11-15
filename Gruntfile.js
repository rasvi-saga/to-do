module.exports = function(grunt) {


grunt.initConfig({

  uglify: {
    js: {
      files: {
        'js/scripts.min.js': ['dev/js/*.js']
      }
    }
  },

  cssmin: {
  target: {
    files: {
      'css/style.min.css':  ['dev/css/*.css']
    }
  }
},

watch: {
  scripts: {
    files: ['dev/js/*.js', 'dev/css/*.css', 'dev/templates/*.hbs'],
    tasks: ['uglify', 'cssmin', 'handlebars'],
    options: {
      spawn: false,
    },
  },
},

handlebars: {
  compile: {
    options: {
      namespace: function(filename) {
	    var names = filename.replace(/modules\/(.*)(\/\w+\.hbs)/, '$1');
	    return names.split('/').join('.');
		}
    },
    files: {
      'templates/handle.min.js': 'dev/templates/*.handlebars'
    }
  }
}

});


grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-handlebars');
grunt.loadNpmTasks('grunt-contrib-watch');


grunt.registerTask('default', ['watch']);


};


