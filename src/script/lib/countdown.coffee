define [
  'backbone',
  'underscore'
], (Backbone, _) ->
  class CountDown
    constructor: (@time) ->
      _.extend @, Backbone.Events
      @reset()

    waitSec: (callback) ->
      setTimeout callback, 1000

    reset: ->
      @_count = @time
      @_active = false

    start: ->
      @reset()
      @_active = true
      @waitSec @tick

    tick: =>
      @_count -= 1
      @trigger 'tick', @_count
      if @_count is 0
        @done()
      else
        @waitSec @tick


    isActive: =>
      @_active

    getCount: =>
      @_count

    done: =>
      @_active = false
      @trigger 'done'


