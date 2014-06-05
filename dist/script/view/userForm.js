(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette', 'template/userForm'], function(Marionette, template) {
    var UserFormView;
    return UserFormView = (function(_super) {
      __extends(UserFormView, _super);

      function UserFormView() {
        return UserFormView.__super__.constructor.apply(this, arguments);
      }

      UserFormView.prototype.template = template;

      UserFormView.prototype.events = {
        'submit .user-form': 'submit'
      };

      UserFormView.prototype.onSubmit = function() {};

      UserFormView.prototype.submit = function(e) {
        var email, password, passwordMatch;
        e.preventDefault();
        email = this.$('.email-input').val();
        password = this.$('.password-input').val();
        passwordMatch = this.$('.password-match-input').val();
        return this.onSubmit(email, password, passwordMatch);
      };

      return UserFormView;

    })(Marionette.ItemView);
  });

}).call(this);

//# sourceMappingURL=userForm.js.map
