define [
  'jquery',
  'underscore',
  'backbone',
  'view/home',
  'view/signup',
  'view/login',
  'view/snaps'
], ($, _, Backbone, HomeView, SignUpView, LoginView, SnapsView) ->
  class Router extends Backbone.Router
    initialize: (options) ->
      @app = options.app

    routes:
      '': 'showHome'
      'login': 'showLogin'
      'signup': 'showSignUp'
      'snaps': 'showSnaps'
      '*default': 'default'

    _requireValidUser: (callback) =>
      if Parse.User.current()?.get('emailVerified')
        callback()
      else
        @navigate 'login', {trigger: true}

    _showContent: (View) =>
      @app.execute('showContent', View)

    logIn: (user) =>
      @navigate 'snaps', {trigger: true}

    showHome: =>
      @_showContent HomeView

    showSignUp: =>
      @_showContent SignUpView

    showLogin: =>
      @_showContent LoginView

    showSnaps: =>
      @_requireValidUser =>
        @_showContent SnapsView

    default: =>
      console.log '???'

