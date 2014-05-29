module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-handlebars')
  grunt.loadNpmTasks('grunt-contrib-sass')

  grunt.initConfig
    distFolder: 'dist'
    srcFolder: 'src'

    watch:
      coffee:
        files: 'src/script/*.coffee'
        tasks: ['coffee:compile']

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
