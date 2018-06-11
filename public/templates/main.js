(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"uft-8\">\r\n    <title>Mixer - "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\r\n\r\n    <script src=\"https://use.fontawesome.com/releases/v5.0.9/js/all.js\" defer></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.runtime.js\" defer></script>\r\n    <script src=\"/templates/playListTemplate.js\" charset=\"utf-8\" defer></script>\r\n    <script src=\"/templates/saveTemplate.js\" charset=\"utf-8\" defer></script>\r\n    <script src=\"/mixerMainFunction.js\" charset=\"uft-8\" defer></script>\r\n    <script src=\"/search.js\" charset=\"uft-8\" defer></script>\r\n\r\n    <link rel=\"stylesheet\" href=\"/Css/buttonStyle.css\" media=\"screen\">\r\n    <link rel=\"stylesheet\" href=\"/Css/Header.css\" media=\"screen\">\r\n\r\n  </head>\r\n\r\n"
    + ((stack1 = container.invokePartial(partials.headerTemplate,depth0,{"name":"headerTemplate","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <body>\r\n    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n  </body>\r\n\r\n</html>\r\n";
},"usePartial":true,"useData":true});
})();