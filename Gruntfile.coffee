LIVERELOAD_PORT = 35729
lrSnippet = require('connect-livereload')(port: LIVERELOAD_PORT)
lrMiddleware = (connect, options) ->
  base = String(options.base)
  return [lrSnippet,
    connect.static(base),
    connect.directory(base)]

module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-handlebars')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-connect')

  grunt.initConfig
    distFolder: 'dist'
    srcFolder: 'src'

    connect:
      preview:
        options:
          port: 9000
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


  grunt.registerTask 'compile', ['coffee:compile', 'handlebars:compile', 'less:compile']
  grunt.registerTask 'preview', ['connect:preview', 'watch']
