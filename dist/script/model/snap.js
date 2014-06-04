(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['parse'], function(Parse) {
    var SnapsModel;
    return SnapsModel = (function(_super) {
      __extends(SnapsModel, _super);

      function SnapsModel() {
        return SnapsModel.__super__.constructor.apply(this, arguments);
      }

      SnapsModel.prototype.className = 'Snap';

      SnapsModel.prototype.isCurrentRecipient = function(user) {
        var recipient;
        recipient = this.get('recipient');
        return (user != null ? user.id : void 0) === (recipient != null ? recipient.id : void 0);
      };

      SnapsModel.prototype.isCurrentSender = function(user) {
        var sender;
        sender = this.get('sender');
        return (user != null ? user.id : void 0) === (sender != null ? sender.id : void 0);
      };

      SnapsModel.prototype.getOtherUser = function(user) {
        if (this.isCurrentSender(user)) {
          return this.get('recipient');
        } else if (this.isCurrentRecipient(user)) {
          return this.get('sender');
        }
      };

      return SnapsModel;

    })(Parse.Object);
  });

}).call(this);

//# sourceMappingURL=snap.js.map
