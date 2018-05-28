var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res, next){
    res.status(200);
    res.render('mixer', {
      home: 1,
        
    });
});
