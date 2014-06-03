define [
  'parse',
], (Parse) ->
  class SnapsModel extends Parse.Object
    className: 'Snap'

    isCurrentRecipient: (user) ->
      recipient = @get('recipient')

      user?.id is recipient?.id

    isCurrentSender: (user) ->
      sender = @get('sender')

      user?.id is sender?.id

    getOtherUser: (user) ->
      if @isCurrentSender(user)
        @get 'recipient'
      else if @isCurrentRecipient(user)
        @get 'sender'

