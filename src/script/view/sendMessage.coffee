define [
  'marionette',
  'template/sendMessage'
], (Marionette, template) ->
  class SendMessageView extends Marionette.ItemView
    template: template

    className: 'form-group'

    ui:
      charsLeft: '.send-chars-left'

    events:
      'keyup textarea': 'onChange'

    MAX_LENGTH: 140

    getMessage: ->
      @$('textarea').val()

    charactersLeft: ->
      length = @getMessage().length
      left = Math.max 0, @MAX_LENGTH - length

    validate: ->
      left = @charactersLeft()
      0 < left <= 140

    onChange: (event) =>
      left = @charactersLeft()
      @ui.charsLeft.text left

      if 0 < left <= 140
        @$el.removeClass 'has-error'
        @$el.addClass 'has-success'
      else
        @$el.removeClass 'has-success'
        @$el.addClass 'has-error'




