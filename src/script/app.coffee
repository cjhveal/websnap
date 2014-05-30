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
    app.router = new Router(app: app)

  app.on 'initialize:after', (options) ->
    Backbone.history?.start()

  defaultViewOptions =
    app: app

  app.commands.setHandler 'showContent', (View, args) ->
    options = _.extend defaultViewOptions, args
    view = new View(options)
    app.contentRegion.show view

  app.commands.setHandler 'logIn', (user) =>
    app.router.logIn user

  return app
