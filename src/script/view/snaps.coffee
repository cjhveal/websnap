define [
  'marionette'
  'template/snaps'
  'view/snap'
  'collection/snaps'
], (Marionette, template, SnapView, SnapsCollection) ->
  class SnapsView extends Marionette.CompositeView
    template: template

    itemView: SnapView
    itemViewContainer: '#snaps-container'

    initialize: ->
      @collection = new SnapsCollection()
      @collection.fetch()
