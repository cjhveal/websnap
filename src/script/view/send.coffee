define [
  'marionette',
  'parse',
  'template/send',
  'view/sendEmail',
  'view/sendMessage',
  'view/sendFile'
], (Marionette, Parse, template, SendEmailView, SendMessageView, SendFileView) ->
  class SendView extends Marionette.Layout
    template: template

    regions:
      'emailRegion': '#send-email-group'
      'messageRegion': '#send-message-group'
      'fileRegion': '#send-file-group'

    events:
      'click button': 'onSubmit'

    initialize: (options) ->
      @user = options.user

    onShow: =>
      @emailRegion.show new SendEmailView()
      @messageRegion.show new SendMessageView()
      @fileRegion.show new SendFileView()

    error: ->

    validate: =>
      _.all @regions, (selector, regionName) =>
        @[regionName].currentView.validate()

    onSubmit: =>
      return unless @validate()

      snapACL = new Parse.ACL()

      Snap = Parse.Object.extend 'Snap'
      snap = new Snap()

      Photo = Parse.Object.extend 'Photo'
      photo = new Photo()

      currentUser = Parse.User.current()
      @emailRegion.currentView.findUser().then(
        (users) =>
          if users.length > 0
            user = users[0]
          else
            @error()
            throw new Error('')
          snap.set 'sender', currentUser
          snap.set 'recipient', user

          snapACL.setReadAccess currentUser.id, true
          snapACL.setReadAccess user.id, true

          snapACL.setWriteAccess currentUser.id, true
          snapACL.setWriteAccess user.id, true


          file = @fileRegion.currentView.getParseFile()
          file.save()
        (error) -> console.log error
      ).then(
        (file) =>
          photo.set 'file', file

          message = @messageRegion.currentView.getMessage()
          photo.set 'message', message
          photo.setACL snapACL

          photo.save()
        (error) -> console.log error
      ).then(
        (photo) =>
          snap.set 'photo', photo
          snap.setACL snapACL

          snap.save()
      ). then (snap) =>
        @options.app.execute 'sendSnap'




