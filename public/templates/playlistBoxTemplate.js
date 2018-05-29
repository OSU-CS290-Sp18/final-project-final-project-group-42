(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playlistBoxTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <p id=\"title\">\r\n          "
    + alias4(((helper = (helper = helpers.songTitle || (depth0 != null ? depth0.songTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"songTitle","hash":{},"data":data}) : helper)))
    + "\r\n        </p>\r\n        <p id=\"artist\">\r\n          "
    + alias4(((helper = (helper = helpers.songArtist || (depth0 != null ? depth0.songArtist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"songArtist","hash":{},"data":data}) : helper)))
    + "\r\n        </p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"playlistBox\">\r\n  <h4 class=\"playListName\">Good Songs</h4>\r\n  <!-- "
    + container.escapeExpression(((helper = (helper = helpers.playListName || (depth0 != null ? depth0.playListName : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"playListName","hash":{},"data":data}) : helper)))
    + " -->\r\n    <div class=\"playListContentBox\">\r\n"
    + ((stack1 = (helpers.each_upto || (depth0 && depth0.each_upto) || alias2).call(alias1,(depth0 != null ? depth0.songContent : depth0),2,{"name":"each_upto","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true});
})();