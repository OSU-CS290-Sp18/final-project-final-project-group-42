var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var songData = require('./songData.json');
var fs = require('fs');

var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

var access_token;
var refresh_token;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//app.use('Access-Control-Allow-Origin','*');
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.header("Access-Control-Allow-Credentials", 'true');
//   next();
// });

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

// app.get('api.spotify.com/v1/:anything', function(req, res, next){
//   res.setHeader("Access-Control-Allow-Origin", '*');
//   res.setHeader("Access-Control-Allow-Credentials", true);
// })

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

app.post('/search', function(req, res, next) {
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;
  var search = req.body;
  //search = JSON.stringify(search);
  res.clearCookie(stateKey);
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {

      // var access_token = body.access_token,
      //     refresh_token = body.refresh_token;
      }
      var url = 'https://api.spotify.com/v1/search' + search.url;
      console.log("url:", url)
      console.log("access_token:", access_token);
      var options = {
        url: search,//'https://api.spotify.com/v1/search',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
      };
      // use the access token to access the Spotify Web API
      request.get(options, function(error, response, body) {
        console.log("Stuff:", body);
      });
    });
});

var client_id = 'da9f7be280c04af894da601f1492e0af'; // Your client id
var client_secret = '41d5b27df9f840a2bc66162902578318'; // Your secret
var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';



app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/newPlaylist/:access_token', function(req, res, next){
    res.status(200);
    res.render('mixerCreateView', {
      title: 'New Playlist',
      playlists: [{side: 'left'},{side: 'right'}]
    })
});

app.get('/callback', function(req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        access_token = body.access_token,
        refresh_token = body.refresh_token;
        console.log("access_tokenHERE:", access_token);
        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/newPlaylist/' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
  //res.redirect('/newPlaylist');
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

//would be cool!
// var SpotifyWebApi = require('spotify-web-api-node');
// var credentials = {
//   clientId: 'da9f7be280c04af894da601f1492e0af',
//   clientSecret: '41d5b27df9f840a2bc66162902578318',
//   redirectUri: 'http://www.michaelthelin.se/test-callback'
// };
//
// var spotifyApi = new SpotifyWebApi(credentials);
//
// // The code that's returned as a query parameter to the redirect URI
// var code = 'MQCbtKe23z7YzzS44KzZzZgjQa621hgSzHN';
//
// // Retrieve an access token and a refresh token
// spotifyApi.authorizationCodeGrant(code).then(
//   function(data) {
//     console.log('The token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);
//     console.log('The refresh token is ' + data.body['refresh_token']);
//
//     // Set the access token on the API object to use it in later calls
//     spotifyApi.setAccessToken(data.body['access_token']);
//     spotifyApi.setRefreshToken(data.body['refresh_token']);
//   },
//   function(err) {
//     console.log('Something went wrong!', err);
//   }
// );
// var SpotifyWebApi = require('spotify-web-api-node');
// var clientId = 'da9f7be280c04af894da601f1492e0af',
//     clientSecret = '41d5b27df9f840a2bc66162902578318'
// var scopes = ['user-read-private', 'user-read-emal'];
//
// var spotifyApi = new SpotifyWebApi({
//     clientId: clientId,
//     clientSecret: clientSecret
// });
// spotifyApi.clientCredentialsGrant().then(
//   function(data){
//     console.log('The access token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);
//
//     spotifyApi.setAccessToken(data.body['access_token']);
//   },
//   function(err){
//     console.log('Something went wrong when retrieving an access token', err);
//   }
// )
// spotifyApi.getPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK').then(
//   function(data) {
//     console.log('Artist albums', data.body);
//   },
//   function(err) {
//     console.error(err);
//   }
// );
// spotifyApi.searchTracks('Love')
//   .then(function(data) {
//     console.log('Search by "Love"', data.body);
//   }, function(err) {
//     console.error(err);
//   });
//spotifyApi.setAccessToken(' da9f7be280c04af894da601f1492e0af')
// spotifyApi.getArtist('Real Music', '')
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
