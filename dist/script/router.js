(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'view/home', 'view/signup', 'view/login', 'view/unverified', 'view/snaps', 'view/send'], function($, _, Backbone, HomeView, SignUpView, LoginView, UnverifiedView, SnapsView, SendView) {
    var Router;
    return Router = (function(_super) {
      __extends(Router, _super);

      function Router() {
        this["default"] = __bind(this["default"], this);
        this.showSend = __bind(this.showSend, this);
        this.showSnaps = __bind(this.showSnaps, this);
        this.showUnverified = __bind(this.showUnverified, this);
        this.showLogin = __bind(this.showLogin, this);
        this.showSignUp = __bind(this.showSignUp, this);
        this.showHome = __bind(this.showHome, this);
        this.onSnap = __bind(this.onSnap, this);
        this.logOut = __bind(this.logOut, this);
        this.logIn = __bind(this.logIn, this);
        this.signUp = __bind(this.signUp, this);
        this._showContent = __bind(this._showContent, this);
        this._requireEmailVerification = __bind(this._requireEmailVerification, this);
        return Router.__super__.constructor.apply(this, arguments);
      }

      Router.prototype.initialize = function(options) {
        return this.app = options.app;
      };

      Router.prototype.routes = {
        '': 'showHome',
        'login': 'showLogin',
        'logout': 'logOut',
        'signup': 'showSignUp',
        'unverified': 'showUnverified',
        'snaps': 'showSnaps',
        'send': 'showSend',
        '*default': 'default'
      };

      Router.prototype._requireUser = function(callback) {
        var user;
        user = Parse.User.current();
        if (user != null) {
          return callback(user);
        } else {
          return this.navigate('login', {
            trigger: true
          });
        }
      };

      Router.prototype._requireEmailVerification = function(callback) {
        return this._requireUser((function(_this) {
          return function(user) {
            if (user != null ? user.get('emailVerified') : void 0) {
              return callback();
            } else {
              return _this.navigate('unverified', {
                trigger: true
              });
            }
          };
        })(this));
      };

      Router.prototype._showContent = function(View, args) {
        return this.app.execute('showContent', View, args);
      };

      Router.prototype.signUp = function(user) {
        return this.navigate('snaps', {
          trigger: true
        });
      };

      Router.prototype.logIn = function(user) {
        return this.navigate('snaps', {
          trigger: true
        });
      };

      Router.prototype.logOut = function(user) {
        Parse.User.logOut();
        return this.navigate('', {
          trigger: true
        });
      };

      Router.prototype.onSnap = function() {
        return this.navigate('snaps', {
          trigger: true
        });
      };

      Router.prototype.showHome = function() {
        return this._showContent(HomeView);
      };

      Router.prototype.showSignUp = function() {
        return this._showContent(SignUpView);
      };

      Router.prototype.showLogin = function() {
        return this._showContent(LoginView);
      };

      Router.prototype.showUnverified = function() {
        return this._requireUser((function(_this) {
          return function(user) {
            return _this._showContent(UnverifiedView, {
              model: user
            });
          };
        })(this));
      };

      Router.prototype.showSnaps = function() {
        return this._requireEmailVerification((function(_this) {
          return function(user) {
            return _this._showContent(SnapsView, {
              user: user
            });
          };
        })(this));
      };

      Router.prototype.showSend = function() {
        return this._requireEmailVerification((function(_this) {
          return function(user) {
            return _this._showContent(SendView, {
              user: user
            });
          };
        })(this));
      };

      Router.prototype["default"] = function() {
        return console.log('route not found!');
      };

      return Router;

    })(Backbone.Router);
  });

}).call(this);

//# sourceMappingURL=router.js.map
