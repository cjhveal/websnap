define [
  'parse',
  'model/snap'
], (Parse, SnapModel) ->
  class SnapsCollection extends Parse.Collection
    model: SnapModel

    #sort by reverse chronological send date
    comparator: (item) ->
      return -item.createdAt?.getTime()
