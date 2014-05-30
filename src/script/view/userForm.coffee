define [
  'marionette',
  'template/userForm'
], (Marionette, template) ->
  class UserFormView extends Marionette.ItemView
    template: template

    events:
      'click .submit': 'submit'

    onSubmit: ->

    submit: ->
      email = @$('.email-input').val()
      password = @$('.password-input').val()
      passwordMatch = @$('.password-match-input').val()

      @onSubmit(email, password, passwordMatch)
