(function() {
  define(['jquery', 'underscore', 'backbone', 'marionette', 'router', 'view/nav'], function($, _, Backbone, Marionette, Router, NavView) {
    var app, defaultViewOptions;
    app = new Marionette.Application();
    app.addRegions({
      navRegion: '#nav-container',
      contentRegion: '#content-container'
    });
    app.addInitializer(function(options) {
      return app.router = new Router({
        app: app
      });
    });
    app.on('initialize:after', function(options) {
      var _ref;
      return (_ref = Backbone.history) != null ? _ref.start() : void 0;
    });
    defaultViewOptions = {
      app: app
    };
    app.commands.setHandler('showContent', function(View, args) {
      var options, view;
      app.navRegion.show(new NavView());
      options = _.extend(defaultViewOptions, args);
      view = new View(options);
      return app.contentRegion.show(view);
    });
    app.commands.setHandler('signUp', (function(_this) {
      return function(user) {
        return app.router.signIn(user);
      };
    })(this));
    app.commands.setHandler('logIn', (function(_this) {
      return function(user) {
        return app.router.logIn(user);
      };
    })(this));
    app.commands.setHandler('sendSnap', (function(_this) {
      return function(snap) {
        return app.router.onSnap();
      };
    })(this));
    return app;
  });

}).call(this);

//# sourceMappingURL=app.js.map
