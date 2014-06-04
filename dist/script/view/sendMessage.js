(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette', 'template/sendMessage'], function(Marionette, template) {
    var SendMessageView;
    return SendMessageView = (function(_super) {
      __extends(SendMessageView, _super);

      function SendMessageView() {
        this.onChange = __bind(this.onChange, this);
        return SendMessageView.__super__.constructor.apply(this, arguments);
      }

      SendMessageView.prototype.template = template;

      SendMessageView.prototype.className = 'form-group';

      SendMessageView.prototype.ui = {
        charsLeft: '.send-chars-left'
      };

      SendMessageView.prototype.events = {
        'keyup textarea': 'onChange'
      };

      SendMessageView.prototype.MAX_LENGTH = 140;

      SendMessageView.prototype.getMessage = function() {
        return this.$('textarea').val();
      };

      SendMessageView.prototype.charactersLeft = function() {
        var left, length;
        length = this.getMessage().length;
        return left = Math.max(0, this.MAX_LENGTH - length);
      };

      SendMessageView.prototype.validate = function() {
        var left;
        left = this.charactersLeft();
        return (0 < left && left <= 140);
      };

      SendMessageView.prototype.onChange = function(event) {
        var left;
        left = this.charactersLeft();
        this.ui.charsLeft.text(left);
        if ((0 < left && left <= 140)) {
          this.$el.removeClass('has-error');
          return this.$el.addClass('has-success');
        } else {
          this.$el.removeClass('has-success');
          return this.$el.addClass('has-error');
        }
      };

      return SendMessageView;

    })(Marionette.ItemView);
  });

}).call(this);

//# sourceMappingURL=sendMessage.js.map
