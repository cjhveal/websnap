define [
  'marionette',
  'template/nav',
  'parse'
], (Marionette, template, Parse) ->
  class NavView extends Marionette.ItemView
    template: template

    serializeData: ->
      user = Parse.User.current()

      loggedIn: user?
      email: user?.getEmail()
