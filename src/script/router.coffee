define [
  'jquery',
  'underscore',
  'backbone',
  'view/home',
  'view/snaps'
], ($, _, Backbone, HomeView, SnapsView) ->
  class Router extends Backbone.Router
    initialize: (options) ->
      @app = options.app

    routes:
      '': 'showHome'
      'snaps': 'showSnaps'
      '*default': 'default'

    _showContent: (View) =>
      @app.commands.execute('showContent', View)

    showHome: =>
      @_showContent HomeView

    showSnaps: =>
      @_showContent SnapsView

    default: =>
      console.log '???'

