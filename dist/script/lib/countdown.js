(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['backbone', 'underscore'], function(Backbone, _) {
    var CountDown;
    return CountDown = (function() {
      function CountDown(time) {
        this.time = time;
        this.done = __bind(this.done, this);
        this.getCount = __bind(this.getCount, this);
        this.isActive = __bind(this.isActive, this);
        this.tick = __bind(this.tick, this);
        _.extend(this, Backbone.Events);
        this.reset();
      }

      CountDown.prototype.waitSec = function(callback) {
        return setTimeout(callback, 1000);
      };

      CountDown.prototype.reset = function() {
        this._count = this.time;
        return this._active = false;
      };

      CountDown.prototype.start = function() {
        this.reset();
        this._active = true;
        return this.waitSec(this.tick);
      };

      CountDown.prototype.tick = function() {
        this._count -= 1;
        this.trigger('tick', this._count);
        if (this._count === 0) {
          return this.done();
        } else {
          return this.waitSec(this.tick);
        }
      };

      CountDown.prototype.isActive = function() {
        return this._active;
      };

      CountDown.prototype.getCount = function() {
        return this._count;
      };

      CountDown.prototype.done = function() {
        this._active = false;
        return this.trigger('done');
      };

      return CountDown;

    })();
  });

}).call(this);

//# sourceMappingURL=countdown.js.map
