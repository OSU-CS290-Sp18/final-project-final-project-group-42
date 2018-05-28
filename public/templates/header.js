(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['headerTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n\n\n    <header>\n      <nav class=\"navbar\">\n          <h1 class=\"Mixer-Title\">Mixer</h1>\n          <p class=\"navbar-search\">\n            <input type=\"text\" id=\"navbar-search-input\" placeholder=\"Input here to search\">\n            <button type=\"button\" id=\"Mixer-Search\"></button>\n          </p>\n      </nav>\n    </header>\n\n\n";
},"useData":true});
})();