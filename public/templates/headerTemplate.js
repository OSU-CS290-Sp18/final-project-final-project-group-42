(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['headerTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n\n\n    <header>\n      <nav class=\"navbar\">\n          <ul class=\"navlist\">\n          <li class=\"Nitem Mixer-Title\">Mixer</li>\n          <li class=\"Nitem navbar-search\">\n            <input type=\"text\" id=\"navbar-search-input\" placeholder=\"Input here to search\">\n            <button type=\"button\" id=\"Mixer-Search\"></button>\n          </li>\n        </ul>\n      </nav>\n    </header>\n\n\n";
},"useData":true});
})();