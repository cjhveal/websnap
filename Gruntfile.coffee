LIVERELOAD_PORT = 35729
SERVER_PORT = 9000
lrSnippet = require('connect-livereload')(port: LIVERELOAD_PORT)
lrMiddleware = (connect, options) ->
  base = String(options.base)
  return [lrSnippet,
    connect.static(base),
    connect.directory(base)]

module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-handlebars')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.initConfig
    distFolder: 'dist'
    srcFolder: 'src'

    connect:
      preview:
        options:
          port: SERVER_PORT
          base: 'dist/'
          middleware: lrMiddleware

    watch:
      preview:
        options:
          livereload: LIVERELOAD_PORT
        files: 'dist/**/*'
        tasks: []

      coffee:
        files: '<%= srcFolder %>/script/*.coffee'
        tasks: ['coffee:compile']
      handlebars:
        files: '<%= srcFolder %>/template/*.hbs'
        tasks: ['handlebars:compile']
      less:
        files: '<%= srcFolder %>/less/*.less'
        tasks: ['less:compile']
      vendor:
        files: '/vendor/*.js'
        tasks: ['copy:vendor']
      index:
        files: '<%= srcFolder %>/index.html'
        tasks: ['copy:index']

    coffee:
      compile:
        options:
          sourceMap: true
        expand: true
        cwd: "#{__dirname}/<%= srcFolder %>/script/"
        src: ['*.coffee'],
        dest: '<%= distFolder %>/script/'
        ext: '.js'

    handlebars:
      compile:
        options:
          namespace: false
          amd: true
        expand: true
        cwd: "#{__dirname}/<%= srcFolder %>/template/"
        src: ['*.hbs']
        dest: '<%= distFolder %>/template/'
        ext: '.js'

    less:
      compile:
        options:
          sourceMap: true
          relativeUrls: true
          dumpLineNumbers: true
        expand: true
        cwd: "#{__dirname}/<%= srcFolder %>/less"
        src: ['*.less']
        dest: '<%= distFolder %>/css/'
        ext: '.css'

    copy:
      vendor:
        expand: true
        cwd: "#{__dirname}/vendor/"
        src: ['*.js']
        dest: '<%= distFolder %>/script/vendor/'
      index:
        src: 'src/index.html'
        dest: 'dist/index.html'


  grunt.registerTask 'compile', ['coffee:compile', 'handlebars:compile', 'less:compile', 'copy']
  grunt.registerTask 'preview', ['connect:preview', 'watch']
