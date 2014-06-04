define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"unverified-email-notice\" class=\"container\">\n  <h1> Email Not Verified </h1>\n  <div> You must verify your email before you can access WebSnap.</div>\n  <div> An email has been sent to ";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ". Please check your spam folders.</div>\n  <div> Once you have verified your email, you can <a href=\"#login\">log in</a> and start snapping! </div>\n</div>\n";
  return buffer;
  })

});