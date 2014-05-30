define [
  'jquery',
  'underscore',
  'backbone',
  'view/home',
  'view/signup',
  'view/login',
  'view/unverified',
  'view/snaps'
], ($, _, Backbone, HomeView, SignUpView, LoginView, UnverifiedView, SnapsView) ->
  class Router extends Backbone.Router
    initialize: (options) ->
      @app = options.app

    routes:
      '': 'showHome'
      'login': 'showLogin'
      'signup': 'showSignUp'
      'unverified': 'showUnverified'
      'snaps': 'showSnaps'
      '*default': 'default'

    _requireUser: (callback) ->
      user = Parse.User.current()
      if user?
        callback(user)
      else
        @navigate 'login', {trigger: true}

    _requireEmailVerification: (callback) =>
      @_requireUser (user) =>
        if user?.get('emailVerified')
          callback()
        else
          @navigate 'unverified', {trigger: true}

    _showContent: (View, args) =>
      @app.execute('showContent', View, args)

    signUp: (user) =>
      @navigate 'snaps', {trigger: true}

    logIn: (user) =>
      @navigate 'snaps', {trigger: true}

    showHome: =>
      @_showContent HomeView

    showSignUp: =>
      @_showContent SignUpView

    showLogin: =>
      @_showContent LoginView

    showUnverified: =>
      @_requireUser (user) =>
        @_showContent UnverifiedView, {model: user}

    showSnaps: =>
      @_requireEmailVerification =>
        @_showContent SnapsView

    default: =>
      console.log '???'

