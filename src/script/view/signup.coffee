define [
  'view/userForm',
  'parse'
], (UserFormView, Parse) ->
  class SignUpView extends UserFormView
    serializeData: ->
      name: 'signup'
      message: 'Sign Up'

    onSubmit: (email, password, passwordMatch) ->
      alert "ERROR" unless password is passwordMatch

      user = new Parse.User()
      user.set
        username: email
        email: email
        password: password

      user.signUp null,
        success: (user) ->
        error: (user, error) ->
          console.log error
