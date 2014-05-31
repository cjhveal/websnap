define [
  'marionette',
  'template/send',
  'view/sendEmail',
  'view/sendMessage',
  'view/sendFile'
], (Marionette, template, SendEmailView, SendMessageView, SendFileView) ->
  class SendView extends Marionette.Layout
    template: template

    regions:
      'emailRegion': '#send-email-group'
      'messageRegion': '#send-message-group'
      'fileRegion': '#send-file-group'

    initialize: (options) ->
      @user = options.user

    onShow: =>
      @emailRegion.show new SendEmailView()
      @messageRegion.show new SendMessageView()
      @fileRegion.show new SendFileView()
