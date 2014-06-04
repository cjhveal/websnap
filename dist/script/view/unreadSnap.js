(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette', 'parse', 'template/snap', 'lib/countdown'], function(Marionette, Parse, template, CountDown) {
    var SnapView;
    return SnapView = (function(_super) {
      __extends(SnapView, _super);

      function SnapView() {
        this.fetchRelated = __bind(this.fetchRelated, this);
        return SnapView.__super__.constructor.apply(this, arguments);
      }

      SnapView.prototype.template = template;

      SnapView.prototype.serializeData = function() {
        var _ref, _ref1, _ref2;
        return {
          loading: this.loading,
          snap: (_ref = this.model) != null ? _ref.toJSON() : void 0,
          photo: (_ref1 = this.photo) != null ? _ref1.toJSON() : void 0,
          otherUser: (_ref2 = this.other) != null ? _ref2.toJSON() : void 0,
          isSender: !this.model.isCurrentSender(this.other)
        };
      };

      SnapView.prototype.ui = {
        'loader': '.snap-loading-wrapper',
        'content': '.snap-content',
        'icon': '.snap-icon i',
        'countdown': '.snap-countdown',
        'email': '.snap-email',
        'photo': '.snap-photo',
        'message': '.snap-message'
      };

      SnapView.prototype.events = {
        'mousedown': 'onHold',
        'touchdown': 'onHold',
        'mouseup': 'onRelease',
        'touchup': 'onRelease'
      };

      SnapView.prototype.icons = {
        'unread': 'glyphicon glyphicon-certificate',
        'sent': 'glyphicon glyphicon-arrow-right',
        'received': 'glyphicon glyphicon-arrow-left'
      };

      SnapView.prototype.initialize = function() {
        this.user = Parse.User.current();
        this.countdown = new CountDown(15);
        this.listenTo(this.countdown, 'tick', (function(_this) {
          return function(count) {
            return _this.updateCountdown(count);
          };
        })(this));
        this.listenTo(this.countdown, 'done', (function(_this) {
          return function(count) {
            return _this.doneCountdown();
          };
        })(this));
        return this.startLoading();
      };

      SnapView.prototype.onRender = function() {
        return this.ui.photo.on('dragstart', function(event) {
          return event.preventDefault();
        });
      };

      SnapView.prototype.isRead = function() {
        return this.model.get('readAt') != null;
      };

      SnapView.prototype.isNewForUser = function() {
        return !this.isRead() && this.model.isCurrentRecipient(this.user);
      };

      SnapView.prototype.getIconName = function() {
        if (this.isNewForUser()) {
          return 'unread';
        }
        if (this.model.isCurrentSender(this.user)) {
          return 'sent';
        } else {
          return 'received';
        }
      };

      SnapView.prototype.getIconClass = function() {
        return this.icons[this.getIconName()];
      };

      SnapView.prototype.setIconClass = function() {
        this.ui.icon.removeClass();
        return this.ui.icon.addClass(this.getIconClass());
      };

      SnapView.prototype.getMessageText = function() {
        if (this.isNewForUser()) {
          return this.photo.get('message');
        }
        if (this.isRead()) {
          return "Read at " + (this.model.get('readAt'));
        } else {
          return "Sent at " + this.model.createdAt;
        }
      };

      SnapView.prototype.setMessageText = function() {
        return this.ui.message.text(this.getMessageText());
      };

      SnapView.prototype.startLoading = function() {
        var other, photo;
        other = this.model.getOtherUser(Parse.User.current());
        photo = this.model.get('photo');
        return this.fetchRelated(other, photo);
      };

      SnapView.prototype.fetchRelated = function(other, photo) {
        return other.fetch().then((function(_this) {
          return function(other) {
            _this.other = other;
            if (!_this.isRead()) {
              return photo.fetch();
            }
          };
        })(this)).then((function(_this) {
          return function(photo) {
            _this.photo = photo;
            return _this.doneLoading();
          };
        })(this));
      };

      SnapView.prototype.doneLoading = function() {
        var url;
        this.ui.email.text(this.other.get('email'));
        this.setIconClass();
        this.setMessageText();
        if (this.isNewForUser()) {
          url = this.photo.get('file').url();
          this.ui.photo.attr('src', url);
        }
        this.ui.loader.hide();
        return this.ui.content.show();
      };

      SnapView.prototype.onHold = function() {
        if (this.isNewForUser()) {
          if (!this.countdown.isActive()) {
            this.startCountdown();
          }
          return this.ui.photo.addClass('open');
        }
      };

      SnapView.prototype.onRelease = function() {
        return this.ui.photo.removeClass('open');
      };

      SnapView.prototype.startCountdown = function() {
        this.ui.icon.hide();
        this.ui.countdown.text(this.countdown.getCount());
        this.ui.countdown.show();
        return this.countdown.start();
      };

      SnapView.prototype.updateCountdown = function(count) {
        return this.ui.countdown.text(count);
      };

      SnapView.prototype.doneCountdown = function() {
        this.ui.icon.show();
        this.ui.countdown.hide();
        this.ui.photo.removeClass('open');
        this.model.set('readAt', new Date());
        return this.model.save().then((function(_this) {
          return function(model) {
            var acl, current;
            current = Parse.User.current();
            acl = new Parse.ACL();
            acl.setWriteAccess(_this.other.id, false);
            acl.setReadAccess(_this.other.id, false);
            acl.setWriteAccess(current.id, false);
            acl.setReadAccess(current.id, false);
            _this.photo.setACL(acl);
            return _this.photo.save();
          };
        })(this)).then((function(_this) {
          return function(photo) {
            _this.ui.photo.attr('src', '');
            return _this.doneLoading();
          };
        })(this));
      };

      return SnapView;

    })(Marionette.ItemView);
  });

}).call(this);

//# sourceMappingURL=unreadSnap.js.map
