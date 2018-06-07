(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['headerTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "          <li class=\"Nitem navbar-search\">\r\n            <input type=\"text\" id=\"navbar-search-input\" placeholder=\"Input here to search\">\r\n            <button type=\"button\" id=\"Mixer-Search\"><i class=\"fas fa-search\"></i></button>\r\n          </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <header>\r\n      <nav class=\"navbar\">\r\n          <ul class=\"navlist\">\r\n          <li class=\"Nitem Mixer-Title\"><a href=\"/\">Mixer</a></li>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.search : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n      </nav>\r\n    </header>\r\n";
},"useData":true});
})();