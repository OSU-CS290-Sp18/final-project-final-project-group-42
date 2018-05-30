(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['headerTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "          <li class=\"Nitem navbar-search\">\n            <input type=\"text\" id=\"navbar-search-input\" placeholder=\"Input here to search\">\n            <button type=\"button\" id=\"Mixer-Search\"></button>\n          </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <header>\n      <nav class=\"navbar\">\n          <ul class=\"navlist\">\n          <li class=\"Nitem Mixer-Title\">Mixer</li>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.search : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n      </nav>\n    </header>\n";
},"useData":true});
})();