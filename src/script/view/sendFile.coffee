define [
  'marionette',
  'template/sendFile'
], (Marionette, template) ->
  class SendFileView extends Marionette.ItemView
    template: template

    validate: -> @file?

    events:
      'change #send-file-input': 'onChange'

    onChange: (event) ->
      files = event.target.files or event.dataTransfer.files
      @file = files[0]

    getParseFile: ->
      new Parse.File 'photo.jpg', @file


