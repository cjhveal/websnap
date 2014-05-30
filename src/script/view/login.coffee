define [
  'view/userForm',
  'parse'
], (UserFormView, Parse) ->
  class LoginView extends UserFormView
    serializeData: ->
      name: 'login'
      message: 'Log In'

    onSubmit: (email, password) ->
      Parse.User.logIn email, password,
        success: (user) =>
          @options.app.execute('logIn', user)
        error: (user, error) ->
          console.log error
