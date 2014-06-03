define [
  'marionette',
  'template/sendEmail'
], (Marionette, template) ->
  class SendEmailView extends Marionette.ItemView
    template: template

    validate: -> true

    getEmail: ->
      email = @$('#send-email-input').val()


    findUserByEmail: (email, callback) ->
      query = new Parse.Query Parse.User
      query.equalTo 'email', email

      query.find()


    findUser: (callback) ->

      @findUserByEmail @getEmail()
