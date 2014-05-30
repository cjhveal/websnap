define [
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'template/home'
], ($, _, Backbone, Marionette, template) ->
  class HomeView extends Marionette.ItemView
    template: template
