define [
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'router'
], ($, _, Backbone, Marionette, Router) ->
  app = new Marionette.Application()

  app.addRegions
    navRegion: '#nav-container'
    contentRegion: '#content-container'

  app.addInitializer (options) ->
    @router = new Router(app: app)

  app.on 'initialize:after', (options) ->
    Backbone.history?.start()

  app.commands.setHandler 'showContent', (View, options) ->
    view = new View(options)
    app.contentRegion.show view

  return app
