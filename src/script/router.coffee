define [
  'jquery',
  'underscore',
  'backbone',
  'view/home',
  'view/signup',
  'view/login',
  'view/unverified',
  'view/snaps'
  'view/send'
], ($, _, Backbone, HomeView, SignUpView, LoginView, UnverifiedView, SnapsView, SendView) ->
  class Router extends Backbone.Router
    initialize: (options) ->
      @app = options.app

    routes:
      '': 'showHome'
      'login': 'showLogin'
      'logout': 'logOut'
      'signup': 'showSignUp'
      'unverified': 'showUnverified'
      'snaps': 'showSnaps'
      'send': 'showSend'
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

    logOut: (user) =>
      Parse.User.logOut()
      @navigate '', {trigger: true}

    onSnap: =>
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
      @_requireEmailVerification (user) =>
        @_showContent(SnapsView, {user: user})

    showSend: =>
      @_requireEmailVerification (user) =>
        @_showContent(SendView, {user: user})

    default: =>
      console.log 'route not found!'

