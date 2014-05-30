define [
  'marionette',
  'template/login',
  'parse'
], (Marionette, template, Parse) ->
  class LoginView extends Marionette.ItemView
    template: template

    events:
      'click .login-submit': 'logIn'

    logIn: ->
      email = @$('.email-input').val()
      password = @$('.password-input').val()

      Parse.User.logIn email, password,
        success: =>
          @options.app.execute('navigateTo', '#snaps')
        error: (user, error) ->
          console.log error



  return LoginView
