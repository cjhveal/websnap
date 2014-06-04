(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'marionette', 'template/home'], function($, _, Backbone, Marionette, template) {
    var HomeView;
    return HomeView = (function(_super) {
      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.template = template;

      return HomeView;

    })(Marionette.ItemView);
  });

}).call(this);

//# sourceMappingURL=home.js.map
