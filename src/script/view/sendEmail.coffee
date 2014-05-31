define [
  'marionette',
  'template/sendEmail'
], (Marionette, template) ->
  class SendEmailView extends Marionette.ItemView
    template: template
