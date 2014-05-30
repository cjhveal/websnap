require.config
  shim:
    handlebars:
      exports: 'Handlebars'
    underscore:
      exports: '_'
    backbone:
      deps: ['underscore', 'jquery']
      exports: 'Backbone'
    marionette:
      deps: ['backbone']
      exports: 'Backbone.Marionette'
    bootstrap:
      deps: ['jquery']
      exports: 'jquery'
    parse:
      deps: ['jquery', 'underscore']
      exports: 'Parse'
  paths:
    handlebars: 'vendor/handlebars'
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone'
    marionette: 'vendor/marionette'
    parse: 'vendor/parse'

require ['parse'], (Parse) ->
  Parse.initialize('your-application-id', 'your-javascript-key')

require ['app'], (app) ->
  app.start()
