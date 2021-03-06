(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['mixer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.createButtonTemplate,depth0,{"name":"createButtonTemplate","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <h2 class=\"playlistsTitle\">Playlists</h2>\r\n  <div class=\"playlistBoxContainer\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.songListHolder : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.playlistBoxTemplate,depth0,{"name":"playlistBoxTemplate","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.newPlaylist : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class = \"songAdder\">\r\n     <div class=\"Playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songInfoTemplate,depth0,{"name":"songInfoTemplate","data":data,"indent":"       ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.playListTemplate,depth0,{"name":"playListTemplate","data":data,"indent":"       ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "     </div>\r\n     <div class=\"Playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songInfoTemplate,depth0,{"name":"songInfoTemplate","data":data,"indent":"       ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.playListTemplate,depth0,{"name":"playListTemplate","data":data,"indent":"       ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "     </div>\r\n  </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.playlist : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songList,depth0,{"name":"songList","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </div>\r\n  <div class=\"playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songList,depth0,{"name":"songList","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </div>\r\n  <div class=\"newPlaylist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songList,depth0,{"name":"songList","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </div>\r\n  ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.home : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();