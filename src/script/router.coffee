define [
  'jquery',
  'underscore',
  'backbone',
  'view/home'
], ($, _, Backbone, HomeView) ->
  class Router extends Backbone.Router
    initialize: (options) ->
      @app = options.app

    routes:
      '': 'showHome'
      'login': 'showLogin'
      '*default': 'default'

    _showContent: (View) =>
      @app.commands.execute('showContent', View)

    showHome: =>
      @_showContent HomeView

    default: =>
      console.log '???'

