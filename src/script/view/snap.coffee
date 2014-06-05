define [
  'marionette'
  'parse'
  'template/snap'
  'lib/countdown'
], (Marionette, Parse, template, CountDown) ->
  class UnreadSnapView extends Marionette.ItemView
    template: template

    serializeData: ->
      loading: @loading
      snap: @model?.toJSON()
      photo: @photo?.toJSON()
      otherUser: @other?.toJSON()
      isSender: !@model.isCurrentSender(@other)

    ui:
      'loader': '.snap-loading-wrapper'
      'content': '.snap-content'
      'icon': '.snap-icon i'
      'countdown': '.snap-countdown'
      'email': '.snap-email'
      'photo': '.snap-photo'
      'message': '.snap-message'

    events:
      'mousedown': 'onHold'
      'touchdown': 'onHold'
      'mouseup': 'onRelease'
      'touchup': 'onRelease'

    icons:
      'unread': 'glyphicon glyphicon-certificate'
      'sent': 'glyphicon glyphicon-arrow-right'
      'received': 'glyphicon glyphicon-arrow-left'

    initialize: ->
      @user = Parse.User.current()
      @countdown = new CountDown(15)
      @listenTo @countdown, 'tick', (count) =>
        @updateCountdown(count)
      @listenTo @countdown, 'done', (count) =>
        @doneCountdown()

      @startLoading()

    onRender: ->
      @ui.photo.on 'dragstart', (event) -> event.preventDefault()

    isRead: ->
      @model.get('readAt')?

    isNewForUser: ->
      not @isRead() and @model.isCurrentRecipient(@user)

    getIconName: ->
      return 'unread' if @isNewForUser()

      if @model.isCurrentSender(@user)
        'sent'
      else
        'received'

    getIconClass: ->
      @icons[@getIconName()]

    setIconClass: ->
      @ui.icon.removeClass()
      @ui.icon.addClass @getIconClass()

    getMessageText: ->
      return @photo.get('message') if @isNewForUser()

      if @isRead()
        "Read at #{@model.get('readAt')}"
      else
        "Sent at #{@model.createdAt}"

    setMessageText: ->
      @ui.message.text @getMessageText()


    startLoading: ->
      other = @model.getOtherUser(Parse.User.current())
      photo = @model.get 'photo'

      @fetchRelated(other, photo)

    fetchRelated: (other, photo) =>
      other.fetch().then( (@other) =>
        photo.fetch() unless @isRead()
      ).then( (@photo) =>
        @doneLoading()
      )

    doneLoading: ->
      @ui.email.text @other.get('email')
      @setIconClass()
      @setMessageText()

      if @isNewForUser()
        url = @photo.get('file').url()
        @ui.photo.attr 'src', url

      @ui.loader.hide()
      @ui.content.show()


    onHold: ->
      if @isNewForUser()
        @startCountdown() unless @countdown.isActive()
        @ui.photo.addClass 'open'

    onRelease: ->
      @ui.photo.removeClass 'open'

    startCountdown: ->
      @ui.icon.hide()
      @ui.countdown.text @countdown.getCount()
      @ui.countdown.show()
      @countdown.start()

    updateCountdown: (count) ->
      @ui.countdown.text count

    doneCountdown: ->
      @ui.icon.show()
      @ui.countdown.hide()
      @ui.photo.removeClass 'open'

      @model.set 'readAt', new Date()
      @model.save().then (model) =>
        current = Parse.User.current()
        acl = new Parse.ACL()
        acl.setWriteAccess(@other.id, false)
        acl.setReadAccess(@other.id, false)

        acl.setWriteAccess(current.id, false)
        acl.setReadAccess(current.id, false)

        @photo.setACL(acl)
        @photo.save()
      .then (photo) =>
        @ui.photo.attr 'src', ''
        @doneLoading()
