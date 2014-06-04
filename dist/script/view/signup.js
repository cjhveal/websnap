(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['view/userForm', 'parse'], function(UserFormView, Parse) {
    var SignUpView;
    return SignUpView = (function(_super) {
      __extends(SignUpView, _super);

      function SignUpView() {
        return SignUpView.__super__.constructor.apply(this, arguments);
      }

      SignUpView.prototype.serializeData = function() {
        return {
          name: 'signup',
          message: 'Sign Up'
        };
      };

      SignUpView.prototype.onSubmit = function(email, password, passwordMatch) {
        var user;
        if (password !== passwordMatch) {
          alert("ERROR");
        }
        user = new Parse.User();
        user.set({
          username: email,
          email: email,
          password: password
        });
        return user.signUp(null, {
          success: function(user) {
            return this.options.app.execute('signUp', user);
          },
          error: function(user, error) {
            return console.log(error);
          }
        });
      };

      return SignUpView;

    })(UserFormView);
  });

}).call(this);

//# sourceMappingURL=signup.js.map
