(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['songInfoTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class = \"add-song-info\">\n   <p class = \"Title\"> Title:\n     <input type=\"text\" id=\"Song-input\" placeholder=\"Input here to search\">\n   </p>\n\n   <p class = \"Artist\"> Artist:\n     <input type=\"text\" id=\"Song-input\" placeholder=\"Input here to search\">\n   </p>\n\n  <button type=\"button\" id=\"add-song\">Add Song</button>\n</div>\n";
},"useData":true});
})();