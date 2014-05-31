define [
  'marionette',
  'template/sendFile'
], (Marionette, template) ->
  class SendFileView extends Marionette.ItemView
    template: template
