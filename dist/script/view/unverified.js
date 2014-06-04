(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette', 'template/unverified'], function(Marionette, template) {
    var UnverifiedView;
    return UnverifiedView = (function(_super) {
      __extends(UnverifiedView, _super);

      function UnverifiedView() {
        return UnverifiedView.__super__.constructor.apply(this, arguments);
      }

      UnverifiedView.prototype.template = template;

      return UnverifiedView;

    })(Marionette.ItemView);
  });

}).call(this);

//# sourceMappingURL=unverified.js.map
