(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette', 'template/sendEmail'], function(Marionette, template) {
    var SendEmailView;
    return SendEmailView = (function(_super) {
      __extends(SendEmailView, _super);

      function SendEmailView() {
        return SendEmailView.__super__.constructor.apply(this, arguments);
      }

      SendEmailView.prototype.template = template;

      SendEmailView.prototype.validate = function() {
        return true;
      };

      SendEmailView.prototype.getEmail = function() {
        var email;
        return email = this.$('#send-email-input').val();
      };

      SendEmailView.prototype.findUserByEmail = function(email, callback) {
        var query;
        query = new Parse.Query(Parse.User);
        query.equalTo('email', email);
        return query.find();
      };

      SendEmailView.prototype.findUser = function(callback) {
        return this.findUserByEmail(this.getEmail());
      };

      return SendEmailView;

    })(Marionette.ItemView);
  });

}).call(this);

//# sourceMappingURL=sendEmail.js.map
