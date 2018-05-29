var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

var s1 = [  {
    title: "All Star",
    artist: "Smash Mouth"
  },
  {
    title: "Africa",
    artist: "Toto"
  },
  {
    title: "Who Let the Dogs Out",
    artist: "The Baha Men"
  },
  {
    title: "Gormet Race",
    artist: "Kirbert"
  },
  {
    title: "Tots",
    artist: "Mots"
  },
  {
    title: "TUBTHUMPING",
    artist: "CHUBAWUMBA"
  }
];

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res, next){
    res.status(200);
    res.render('mixer', {
      title: ' ',
      home: 1,
      songList: s1
    });
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
