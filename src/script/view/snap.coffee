define [
  'marionette',
  'template/snap'
], (Marionette, template) ->
  class SnapView extends Marionette.ItemView
    template: template
