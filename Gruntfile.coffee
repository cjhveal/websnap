module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-handlebars')
  grunt.loadNpmTasks('grunt-contrib-less')

  grunt.initConfig
    distFolder: 'dist'
    srcFolder: 'src'

    watch:
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
        expand: true,
        flatten: true,
        cwd: "#{__dirname}/<%= srcFolder %>/script/",
        src: ['*.coffee'],
        dest: '<%= distFolder %>/script/',
        ext: '.js'

    handlebars:
      compile:
        options:
          namespace: 'WebSnap.Templates'
        expand: true
        cwd: "#{__dirname}/<%= srcFolder %>/template/"
        src: ['*.hbs']
        dest: '<%= distFolder %>/template/',
        ext: '.js'
        amd: true

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
