define [
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'router',
  'view/nav'
], ($, _, Backbone, Marionette, Router, NavView) ->
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
    app.navRegion.show new NavView()
    options = _.extend defaultViewOptions, args
    view = new View(options)
    app.contentRegion.show view

  app.commands.setHandler 'signUp', (user) =>
    app.router.signIn user

  app.commands.setHandler 'logIn', (user) =>
    app.router.logIn user

  return app
