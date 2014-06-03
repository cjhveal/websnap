define [
  'marionette',
  'template/unverified'
], (Marionette, template) ->
  class UnverifiedView extends Marionette.ItemView
    template: template
