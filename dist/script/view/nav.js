(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette', 'bootstrap', 'template/nav', 'parse'], function(Marionette, Bootstrap, template, Parse) {
    var NavView;
    return NavView = (function(_super) {
      __extends(NavView, _super);

      function NavView() {
        return NavView.__super__.constructor.apply(this, arguments);
      }

      NavView.prototype.template = template;

      NavView.prototype.serializeData = function() {
        var user;
        user = Parse.User.current();
        return {
          loggedIn: user != null,
          email: user != null ? user.getEmail() : void 0
        };
      };

      NavView.prototype.onRender = function() {
        return Bootstrap('.navbar-collapse').collapse();
      };

      return NavView;

    })(Marionette.ItemView);
  });

}).call(this);

//# sourceMappingURL=nav.js.map
