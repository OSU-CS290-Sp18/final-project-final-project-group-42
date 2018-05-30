(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['mixerCreateView'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class = \"songAdder\">\r\n   <div class=\"Playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songInfoTemplate,depth0,{"name":"songInfoTemplate","data":data,"indent":"     ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.playListTemplate,depth0,{"name":"playListTemplate","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "   </div>\r\n   <div class=\"Playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songInfoTemplate,depth0,{"name":"songInfoTemplate","data":data,"indent":"     ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.playListTemplate,depth0,{"name":"playListTemplate","data":data,"indent":"     ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "   </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});
})();