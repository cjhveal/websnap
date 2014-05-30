define [
  'jquery',
  'underscore',
  'backbone',
  'view/home',
  'view/login',
  'view/snaps'
], ($, _, Backbone, HomeView, LoginView, SnapsView) ->
  class Router extends Backbone.Router
    initialize: (options) ->
      @app = options.app

    routes:
      '': 'showHome'
      'login': 'showLogin'
      'snaps': 'showSnaps'
      '*default': 'default'

    requireLogin: (callback) =>
      if Parse.User.current()
        callback()
      else
        @navigate 'login', {trigger: true}

    _showContent: (View) =>
      @app.execute('showContent', View)

    logIn: (user) =>
      @navigate 'snaps', {trigger: true}

    showHome: =>
      @_showContent HomeView

    showLogin: =>
      @_showContent LoginView

    showSnaps: =>
      @requireLogin =>
        @_showContent SnapsView

    default: =>
      console.log '???'

