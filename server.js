var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var songData = require('./songData.json');
var fs = require('fs');

var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/', function(req, res, next){
    res.status(200);
    res.render('mixerHomeView', {
      title: 'Home',
      search: 1,
      songListHolder: songData
    });
});

app.get('/newPlaylist', function(req, res, next){
    res.status(200);
    res.render('mixerCreateView', {
      title: 'New Playlist',
      playlists: [{side: 'left'},{side: 'right'}]
    });
});

app.get('/playlist/:name', function(req, res, next){
  songData = require('./songData.json');
  var name = req.params.name;
  var check = 0;
  if(songData[name]){
    res.render('mixerPlaylistView', {
      title: name,
      playlist: songData[name].mixLists
    });
    res.status(200);
  }else{
    next();
  }
});

app.post('/playlist/:name/new', function(req, res, next) {
  var name = req.params.name;
  var newData = req.body;
  songData[newData.mixTitle] = newData;
  songData = JSON.stringify(songData);//.slice(0, -1) + ",\n" + JSON.stringify(newData).slice(1);
  fs.writeFile('./songData.json', songData, function(err){
    if(err) {
      console.error(err);
      return;
    }//else{
      res.status(200).end();
    //};
  });

 });

app.use(express.static('public'));

app.use(function(req, res){
  res.status(404).render('errorTemplate', {title: "page not found"});
});

app.listen(port, function (err) {
  console.log("== Server is listening on port", port);
});
