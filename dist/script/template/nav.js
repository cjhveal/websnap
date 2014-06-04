define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n        <li></li>\n          <li class=\"button\"> <form class=\"navbar-form\" action=\"#send\">\n            <button class=\"btn navbar-btn navbar-send-btn\">Send Snap</button>\n          </form></li>\n          <li class=\"button\"> <form class=\"navbar-form\" action=\"#snaps\">\n            <button class=\"btn navbar-btn navbar-snaps-btn\">My Snaps</button>\n          </form></li>\n          <li class=\"button\"> <form class=\"navbar-form\" action=\"#logout\">\n            <button class=\"btn navbar-btn navbar-logout-btn\">Log Out</button>\n          </form></li>\n        ";
  }

function program3(depth0,data) {
  
  
  return "\n          <li class=\"button\"> <form class=\"navbar-form\" action=\"#login\">\n            <button class=\"btn navbar-btn navbar-login-btn\">Sign In</button>\n          </form></li>\n        ";
  }

  buffer += "<div class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-container\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">WebSNAP</a>\n    </div>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbar-collapse-container\">\n      <ul class=\"navbar-controls nav navbar-nav navbar-right\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.loggedIn), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  })

});