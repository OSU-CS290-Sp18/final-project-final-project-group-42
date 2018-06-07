(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['headerTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
<<<<<<< HEAD
    return "          <li class=\"Nitem navbar-search\">\n            <input type=\"text\" id=\"navbar-search-input\" placeholder=\"Input here to search\">\n            <button type=\"button\" id=\"Mixer-Search\"><i class=\"fas fa-search\"></i></button>\n          </li>\n";
=======
    return "          <li class=\"Nitem navbar-search\">\r\n            <input type=\"text\" id=\"navbar-search-input\" placeholder=\"Input here to search\">\r\n            <button type=\"button\" id=\"Mixer-Search\"><i class=\"fas fa-search\"></i></button>\r\n          </li>\r\n";
>>>>>>> df8662c3c02a186bb35f1290d64281a5137696b4
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <header>\n      <nav class=\"navbar\">\n          <ul class=\"navlist\">\n          <li class=\"Nitem Mixer-Title\"><a href=\"/\">Mixer</a></li>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.search : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n      </nav>\n    </header>\n";
},"useData":true});
})();