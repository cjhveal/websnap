(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['marionette', 'template/sendFile'], function(Marionette, template) {
    var SendFileView;
    return SendFileView = (function(_super) {
      __extends(SendFileView, _super);

      function SendFileView() {
        return SendFileView.__super__.constructor.apply(this, arguments);
      }

      SendFileView.prototype.template = template;

      SendFileView.prototype.validate = function() {
        return this.file != null;
      };

      SendFileView.prototype.events = {
        'change #send-file-input': 'onChange'
      };

      SendFileView.prototype.onChange = function(event) {
        var files;
        files = event.target.files || event.dataTransfer.files;
        return this.file = files[0];
      };

      SendFileView.prototype.getParseFile = function() {
        return new Parse.File('photo.jpg', this.file);
      };

      return SendFileView;

    })(Marionette.ItemView);
  });

}).call(this);

//# sourceMappingURL=sendFile.js.map
