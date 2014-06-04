define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li class=\"snap\">\n<div class=\"snap-content\">\n<div class=\"snap-header\">\n<span class=\"snap-email\">\n  "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.otherUser)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n</span>\n<span class=\"snap-icon\">\n  <i></i>\n</span>\n\n<span class=\"snap-countdown\"></span>\n</div>\n\n<div class=\"snap-photo-wrapper\">\n  <img class=\"snap-photo img-responsive\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.photo)),stack1 == null || stack1 === false ? stack1 : stack1.file)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></img>\n</div>\n  <div class=\"snap-message\">\n  "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.photo)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </div>\n  </div>\n    <div class=\"snap-loading-wrapper\">\n      <div class=\"loading-circle\"></div>\n      <div class=\"loading-circle\"></div>\n    </div>\n</li>\n";
  return buffer;
  })

});