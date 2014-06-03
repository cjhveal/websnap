define [
  'marionette'
  'parse'
  'template/snaps'
  'view/snap'
  'collection/snaps'
], (Marionette, Parse, template, SnapView, SnapsCollection) ->
  class SnapsView extends Marionette.CompositeView
    template: template

    itemViewContainer: '#snaps-container'
    itemView: SnapView

    initialize: ->
      items = [
        {message: 'abc', email: 'abc@example.com', photoUrl: 'photo.jpg'}
        {message: 'hi', email: 'cody@codyveal.com', photoUrl: 'photo.jpg'}
        {message: 'wow', email: 'abc@example.com', photoUrl: 'photo.jpg'}
      ]
      @collection = new SnapsCollection()
      @collection.fetch()
