(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['view/userForm', 'parse'], function(UserFormView, Parse) {
    var LoginView;
    return LoginView = (function(_super) {
      __extends(LoginView, _super);

      function LoginView() {
        return LoginView.__super__.constructor.apply(this, arguments);
      }

      LoginView.prototype.serializeData = function() {
        return {
          name: 'login',
          message: 'Log In'
        };
      };

      LoginView.prototype.onSubmit = function(email, password) {
        return Parse.User.logIn(email, password, {
          success: (function(_this) {
            return function(user) {
              return _this.options.app.execute('logIn', user);
            };
          })(this),
          error: function(user, error) {
            return console.log(error);
          }
        });
      };

      return LoginView;

    })(UserFormView);
  });

}).call(this);

//# sourceMappingURL=login.js.map
