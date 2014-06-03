require.config
  shim:
    handlebars:
      exports: 'Handlebars'
    underscore:
      exports: '_'
    bootstrap:
      deps: ['jquery']
      exports: '$'
    backbone:
      deps: ['underscore', 'jquery']
      exports: 'Backbone'
    marionette:
      deps: ['backbone']
      exports: 'Backbone.Marionette'
    parse:
      deps: ['jquery', 'underscore']
      exports: 'Parse'
  paths:
    handlebars: 'vendor/handlebars'
    jquery: 'vendor/jquery',
    bootstrap: 'vendor/bootstrap'
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone'
    marionette: 'vendor/marionette'
    parse: 'vendor/parse'

PARSE_APP_ID = 'SsjdjAhgDIweEGVGf0wwFtCyE1095ft5MKb0qiTl'
PARSE_JS_KEY = 'dHbfIZ0QxRZrrTAkuKjoTYhtNMQFEn9Of1qitcmO'
require ['parse'], (Parse) ->
  Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY)

require ['app'], (app) ->
  app.start()
