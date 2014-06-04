define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"send-form-container container\">\n  <h1> Send a Snap </h1>\n  <form id=\"send-form\">\n\n  <div id=\"send-email-group\" class=\"form-group\">\n  </div>\n  <div id=\"send-message-group\" class=\"form-group\">\n  </div>\n  <div id=\"send-file-group\" class=\"form-group\">\n  </div>\n\n  <button class=\"btn btn-info\" type=\"submit\">Send</button>\n  </form>\n</div>\n";
  })

});