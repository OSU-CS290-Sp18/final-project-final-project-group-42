(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['mixerCreateView'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "          <div class=\"add-songs-container "
    + container.escapeExpression(((helper = (helper = helpers.side || (depth0 != null ? depth0.side : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"side","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = container.invokePartial(partials.songInfoTemplate,depth0,{"name":"songInfoTemplate","data":data,"indent":"             ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.playListTemplate,depth0,{"name":"playListTemplate","data":data,"indent":"             ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "          </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"name-playlist-containter\">\r\n  <input type=\"text\" class=\"name-playlist\" placeholder=\"Name Playlist\">\r\n</div>\r\n<div class=\"mix\">\r\n  <h3> How often would you like to switch between playlists:</h3>\r\n  <select id=\"mix-level\">\r\n    <option value=\"1\">1</option>\r\n    <option value=\"2\">2</option>\r\n    <option value=\"3\">3</option>\r\n    <option value=\"4\">4</option>\r\n    <option value=\"5\">5</option>\r\n  </select>\r\n</div>\r\n<div>\r\n    <div class = \"mix-song-adders\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.playlists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n\r\n<div class=\"mix-playlists\">\r\n  <button id='mix-button'> Mix Playlists </button>\r\n</div>\r\n\r\n<div id=\"mixlist-location\">\r\n  \r\n</div>\r\n";
},"usePartial":true,"useData":true});
})();