(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['songInfoTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class = \"add-song-info\">\n\n   <p class = \"Title\"> Title:\n   \n   <input type=\"text\" id=\"Song-input\" placeholder=\"Input here to search\">\n\n   </p>\n\n\n   <p class = \"Artist\"> Artist:\n\n   <input type=\"text\" id=\"Song-input\" placeholder=\"Input here to search\">\n\n   </p>\n\n\n  <button type=\"button\" id=\"Add-Song\">Add Song</button>\n\n</div>\n";
},"useData":true});
})();