define [
  'parse',
  'model/snap'
], (Parse, SnapModel) ->
  class SnapsCollection extends Parse.Collection
    model: SnapModel
