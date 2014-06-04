(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['parse', 'model/snap'], function(Parse, SnapModel) {
    var SnapsCollection;
    return SnapsCollection = (function(_super) {
      __extends(SnapsCollection, _super);

      function SnapsCollection() {
        return SnapsCollection.__super__.constructor.apply(this, arguments);
      }

      SnapsCollection.prototype.model = SnapModel;

      SnapsCollection.prototype.comparator = function(item) {
        var _ref;
        return -((_ref = item.createdAt) != null ? _ref.getTime() : void 0);
      };

      return SnapsCollection;

    })(Parse.Collection);
  });

}).call(this);

//# sourceMappingURL=snaps.js.map
