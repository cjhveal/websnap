define [
  'marionette',
  'template/userForm'
], (Marionette, template) ->
  class UserFormView extends Marionette.ItemView
    template: template

    events:
      'submit .user-form': 'submit'

    onSubmit: ->

    submit: (e) ->
      e.preventDefault()
      email = @$('.email-input').val()
      password = @$('.password-input').val()
      passwordMatch = @$('.password-match-input').val()

      @onSubmit(email, password, passwordMatch)
