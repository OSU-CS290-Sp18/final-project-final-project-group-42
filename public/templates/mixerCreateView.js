(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['mixerCreateView'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"mix\">\r\n  <h3> How often would you like to switch between playlists:</h3>\r\n  <select class=\"mix-level\">\r\n    <option value=\"1\">1</option>\r\n    <option value=\"2\">2</option>\r\n    <option value=\"3\">3</option>\r\n    <option value=\"4\">4</option>\r\n    <option value=\"5\">5</option>\r\n  </select>\r\n</div>\r\n<div class = \"songAdder\">\r\n   <div class=\"Playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songInfoTemplate,depth0,{"name":"songInfoTemplate","data":data,"indent":"     ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.playListTemplate,depth0,{"name":"playListTemplate","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "   </div>\r\n   <div class=\"Playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songInfoTemplate,depth0,{"name":"songInfoTemplate","data":data,"indent":"     ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.playListTemplate,depth0,{"name":"playListTemplate","data":data,"indent":"     ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "   </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});
})();