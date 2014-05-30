require.config
  paths:
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone'

require ['app'], (App) ->
  App.initialize()
