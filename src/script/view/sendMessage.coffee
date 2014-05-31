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

    onChange: (event) =>
      length = @$('textarea').val().length
      left = Math.max 0, 140 - length

      @ui.charsLeft.text left
      if 0 < left <= 140
        @$el.removeClass 'has-error'
        @$el.addClass 'has-success'
      else
        @$el.removeClass 'has-success'
        @$el.addClass 'has-error'




