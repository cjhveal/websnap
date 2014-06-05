(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette', 'parse', 'template/send', 'view/sendEmail', 'view/sendMessage', 'view/sendFile'], function(Marionette, Parse, template, SendEmailView, SendMessageView, SendFileView) {
    var SendView;
    return SendView = (function(_super) {
      __extends(SendView, _super);

      function SendView() {
        this.onSubmit = __bind(this.onSubmit, this);
        this.validate = __bind(this.validate, this);
        this.onShow = __bind(this.onShow, this);
        return SendView.__super__.constructor.apply(this, arguments);
      }

      SendView.prototype.template = template;

      SendView.prototype.regions = {
        'emailRegion': '#send-email-group',
        'messageRegion': '#send-message-group',
        'fileRegion': '#send-file-group'
      };

      SendView.prototype.events = {
        'submit form': 'onSubmit'
      };

      SendView.prototype.initialize = function(options) {
        return this.user = options.user;
      };

      SendView.prototype.onShow = function() {
        this.emailRegion.show(new SendEmailView());
        this.messageRegion.show(new SendMessageView());
        return this.fileRegion.show(new SendFileView());
      };

      SendView.prototype.error = function() {};

      SendView.prototype.validate = function() {
        return _.all(this.regions, (function(_this) {
          return function(selector, regionName) {
            return _this[regionName].currentView.validate();
          };
        })(this));
      };

      SendView.prototype.onSubmit = function(e) {
        var Photo, Snap, currentUser, photo, snap, snapACL;
        e.preventDefault();
        if (!this.validate()) {
          return;
        }
        snapACL = new Parse.ACL();
        Snap = Parse.Object.extend('Snap');
        snap = new Snap();
        Photo = Parse.Object.extend('Photo');
        photo = new Photo();
        currentUser = Parse.User.current();
        return this.emailRegion.currentView.findUser().then((function(_this) {
          return function(users) {
            var file, user;
            if (users.length > 0) {
              user = users[0];
            } else {
              _this.error();
              throw new Error('');
            }
            snap.set('sender', currentUser);
            snap.set('recipient', user);
            snapACL.setReadAccess(currentUser.id, true);
            snapACL.setReadAccess(user.id, true);
            snapACL.setWriteAccess(currentUser.id, true);
            snapACL.setWriteAccess(user.id, true);
            file = _this.fileRegion.currentView.getParseFile();
            return file.save();
          };
        })(this), function(error) {
          return console.log(error);
        }).then((function(_this) {
          return function(file) {
            var message;
            photo.set('file', file);
            message = _this.messageRegion.currentView.getMessage();
            photo.set('message', message);
            photo.setACL(snapACL);
            return photo.save();
          };
        })(this), function(error) {
          return console.log(error);
        }).then((function(_this) {
          return function(photo) {
            snap.set('photo', photo);
            snap.setACL(snapACL);
            return snap.save();
          };
        })(this)).then((function(_this) {
          return function(snap) {
            return _this.options.app.execute('sendSnap');
          };
        })(this));
      };

      return SendView;

    })(Marionette.Layout);
  });

}).call(this);

//# sourceMappingURL=send.js.map
