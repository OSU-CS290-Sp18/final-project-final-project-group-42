var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var songData = require('./songData.json');
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

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
    })
});

app.get('/playlist/:name', function(req, res, next){
  var name = req.params.name;
  res.status(200);
  for(var i = 0; i < songData.length; i++){
    if(songData[i].mixTitle == name){
      res.render('mixerPlaylistView', {
        title: name,
        playlist: songData[i].mixData
      });
    }
  }
});

//would be cool! 
// spotifyApi.getPlaylist('Real Music', '3bnO3NRdPFTipU2ZFpl4mw')
//   .then(function(data) {
//     console.log('Some information about this playlist', data.body);
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });

app.use(express.static('public'));

app.use(function(req, res){
  res.status(404).render('errorTemplate', {title: "page not found"});
});

app.listen(port, function (err) {
  console.log("== Server is listening on port", port);
});
