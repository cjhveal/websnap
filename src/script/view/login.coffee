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
        success: (user) =>
          @options.app.execute('logIn', user)
        error: (user, error) ->
          console.log error



  return LoginView
