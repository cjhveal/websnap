define [
  'marionette',
  'template/nav'
], (Marionette, template) ->
  class UnverifiedView extends Marionette.ItemView
    template: template
