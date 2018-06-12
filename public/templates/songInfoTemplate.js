(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['songInfoTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"add-song-info\">\n   <p class = \"Title\"> Title:\n     <input type=\"text\" class=\"Song-input title"
    + alias4(((helper = (helper = helpers.side || (depth0 != null ? depth0.side : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"side","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Song title\">\n   </p>\n\n   <p class = \"Artist\"> Artist:\n     <input type=\"text\" class=\"Song-input artist"
    + alias4(((helper = (helper = helpers.side || (depth0 != null ? depth0.side : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"side","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Artist Name\">\n   </p>\n\n  <button type=\"button\" class=\"add-song add-song-"
    + alias4(((helper = (helper = helpers.side || (depth0 != null ? depth0.side : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"side","hash":{},"data":data}) : helper)))
    + "\">Add Song</button>\n</div>\n";
},"useData":true});
})();