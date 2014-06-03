define [
  'marionette',
  'bootstrap',
  'template/nav',
  'parse'
], (Marionette, Bootstrap, template, Parse) ->
  class NavView extends Marionette.ItemView
    template: template

    serializeData: ->
      user = Parse.User.current()

      loggedIn: user?
      email: user?.getEmail()

    onRender: ->
      Bootstrap('.navbar-collapse').collapse()

