(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette', 'parse', 'template/snaps', 'view/snap', 'collection/snaps'], function(Marionette, Parse, template, SnapView, SnapsCollection) {
    var SnapsView;
    return SnapsView = (function(_super) {
      __extends(SnapsView, _super);

      function SnapsView() {
        return SnapsView.__super__.constructor.apply(this, arguments);
      }

      SnapsView.prototype.template = template;

      SnapsView.prototype.itemViewContainer = '#snaps-container';

      SnapsView.prototype.itemView = SnapView;

      SnapsView.prototype.initialize = function() {
        var items;
        items = [
          {
            message: 'abc',
            email: 'abc@example.com',
            photoUrl: 'photo.jpg'
          }, {
            message: 'hi',
            email: 'cody@codyveal.com',
            photoUrl: 'photo.jpg'
          }, {
            message: 'wow',
            email: 'abc@example.com',
            photoUrl: 'photo.jpg'
          }
        ];
        this.collection = new SnapsCollection();
        return this.collection.fetch();
      };

      return SnapsView;

    })(Marionette.CompositeView);
  });

}).call(this);

//# sourceMappingURL=snaps.js.map
