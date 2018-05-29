(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playlistBoxTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n        <p id=\"title\">\r\n          "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n        </p>\r\n        <p id=\"artist\">\r\n          "
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "\r\n        </p>\r\n      ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"playlistBox\">\r\n  <h4 class=\"playListName\">"
    + container.escapeExpression(((helper = (helper = helpers.playListName || (depth0 != null ? depth0.playListName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"playListName","hash":{},"data":data}) : helper)))
    + "</h4>\r\n    <div class=\"playListContentBox\">\r\n      <div class=\"playlist-icon\">\r\n        <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARRSURBVGhD7dpb6CZzHMfxP7uss5Uz5bxonS5wQyKx3DiFC27sbrniErspWUrOu+VUUnKBKBeWKMkhh5VEIiTHTawtJHLI+f2edp5+z7Pfmec3zxy48KlX23/3NzPP85+Z33x/39m5jrMXluBy3IR78cCmP2/DVTgXh+A/lS1wAu7CB/i7ga/wIM7B1vhXsi0uw8eIPmRT38IzuAcGyZa4FF8j+kBt/Qy/0PboLYuwDtEH6Np6nI7OczF+QHTQvvyJGzAPneQaRAfqy0b8mPz8OLZBq6xGepC+/YUzcTje3fR3ehHbYaZcjfQgQ7gPZXbC8yj/bS0aX2YXIT3AED7DjkizAM+iHOPzKjuHYegb20vqVETxknod5dgLMDU+qYeaYlN3oC774Rs41ofn7qiND7vJg/TtI0x7ADprOXuV29yPylh2bEB6kL79gRNRl+PwHtLtvBSPQhhrp3TwEF5F1Uy0Fa7D74i2fRibxXvDUxxt0NT3cHY5G/vDQtDfnj/fjcmz/jQWIs2ReAvpuEmezX0xFk9vNLgJS4o12AF18RJeCQvEcttXYCnv2VmBX5Huu8qVGIu/wWhgrl/gb7xJvPZdk5T7eAxNZ0zP2ljeRzQwhzfeeZglXnJpXdWUV8FuKLI3okG5Gj1tgyxDtN9coweka+xoQI6f0HZV52LtbUT7z3E9itgoiAbksLHQRdp8hkdQ5GZEA3JYXNbFafQKnFb8VJ0DEO0/h8+iIvcgGpDjWFRlMdJpdCnq4syX7jvXOyhiSyYakMNiriqeiXTsE6iL6/R0fC63K2LzLBqQ4xhUxcspHbsKdbEiSMfn8tFR5HZEA3KchbpcAs+EX8JFUlV2QbT/HK5VilgSRANyWDt1kTYr0tEla2kRDchhAThzUyDJU4j2n+MWFDkU0YBcFoBtcjKi/eayMhjlS0SDcvh0Px6zxDqp7fLhQIzyEKJBVVzspJXqF6hcsVVkV7yEdL9N2XkZi+8sooERl52W4K4f0r6TVexyWDtNyynoopM/uj/K+KHKLkUVS+ZbkbYv7WZMriEsAF02uzpM4xTr7NTmxp50NDaL7fxosD7FSYjiF3NRFG1n2fE5+uiTvYwweyJdfspFk0/+yQ5gGpenFm7pdkM4A5W5EeVAu+I2lKfFdXN6gCHY1K6NjbKyePNysH1aF8v03EZBV36Dx50a3xR5SbmRrf2dEcW+05uYPFDfrkV2fFNUbvgcoreuNs/SAwzBz9Lo1YKDfR9R7uAZpP0qn+RVHcC+WAFMbV5HsRh8AeWO3oALKafbyV5s36wcDsbM8cs8iXKHPjQtm9OD9O1DuKZvnfm4E9FB+mYJNNPlVJcL8R2iA3bN+89VZaMbu0ksu33JUk7PffC+PAKDxJLd0t/WfvRhZmFJX1t29Jl94H9d8sE4y1myGLWibrqW6TVedufDXuyjeA1WBp/A/wLl9O17QNcQLk8Pwv8Zz9zcP09FqwX4Lku9AAAAAElFTkSuQmCC\">\r\n      </div>\r\n      <!-- "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.songListHolder : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " -->\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();