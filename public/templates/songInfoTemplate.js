(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['songInfoTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class = \"add-song-info\">\r\n\r\n   <p class = \"Title\"> Title:\r\n   \r\n   <input type=\"text\" id=\"Song-input\" placeholder=\"Input here to search\">\r\n\r\n   </p>\r\n\r\n\r\n   <p class = \"Artist\"> Artist:\r\n\r\n   <input type=\"text\" id=\"Song-input\" placeholder=\"Input here to search\">\r\n\r\n   </p>\r\n\r\n\r\n  <button type=\"button\" id=\"Add-Song\">Add Song</button>\r\n\r\n</div>\r\n";
},"useData":true});
})();