(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['mixer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.createButtonTemplate,depth0,{"name":"createButtonTemplate","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.playListTemplate,depth0,{"name":"playListTemplate","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <!-- ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.newPlaylist : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n      <div class=\"Playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.newSong,depth0,{"name":"newSong","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.songList,depth0,{"name":"songList","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"Playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.newSong,depth0,{"name":"newSong","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.songList,depth0,{"name":"songList","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.playlist : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songList,depth0,{"name":"songList","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"playlist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songList,depth0,{"name":"songList","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"newPlaylist\">\r\n"
    + ((stack1 = container.invokePartial(partials.songList,depth0,{"name":"songList","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div> -->\r\n    ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"uft-8\">\r\n    <title>Mixer - "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\r\n\r\n    <script> src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.runtime.js\" defer></script>\r\n\r\n    <!-- <script src=\"/index.js\" charset=\"utf-8\" defer></script> -->\r\n  </head>\r\n\r\n"
    + ((stack1 = container.invokePartial(partials.headerTemplate,depth0,{"name":"headerTemplate","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <body>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.home : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  </body>\r\n</html>\r\n";
},"usePartial":true,"useData":true});
})();