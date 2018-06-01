var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

var songListHolder = []

// var s1 = require('./songList1');
// var s2 = require('./songList2');

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

var s2 =[
  {
    title: "Arms Wide Open",
    artist: "Creed"
  },
  {
    title: "How You Remind Me",
    artist: "Nickleback"
  },
  {
    title: "The Reason",
    artist: "Hoobastak"
  },
  {
    title: "Iris",
    artist: "The Goo Goo Dolls"
  },
  {
    title: "Nookie",
    artist: "Limp Biskit"
  },
  {
    title: "All Star",
    artist: "Guy Feiri"
  },
  {
     "title": "Fidle Sticks",
     "artist": "none"
  }
];

songListHolder = [
  {
    playListName: 'Good Songs',
    list: s1
  },
  {
    playListName: 'Real Music',
    list: s2
  }
];
//songListHolder[1] = s2;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res, next){
    res.status(200);
    res.render('mixerHomeView', {
      title: 'Home',
      search: 1,
      //home: 1,
      songListHolder: songListHolder
    });
});

app.get('/newPlaylist', function(req, res, next){
    res.status(200);
    res.render('mixerCreateView', {
      title: 'New Playlist',
      //newPlaylist: 1,
      //songlist: songListHolder
    })
});

app.get('/playlist/:name', function(req, res, next){
  var name = req.params.name;
  res.status(200);
  res.render('mixerPlaylistView', {
    title: name,
    songlist: songListHolder
  });
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
