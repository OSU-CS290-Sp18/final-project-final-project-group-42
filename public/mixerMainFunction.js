//mixes the playlists
function mixer(mixLevel, s1, s2){
  var mix = [];//new playlist

  var x = 0;//counter for newplaylist
  var y = 0;//counter for playlist 1
  var z = 0;//counter for playlsit 2
  var i = 0;//counter for mixing
  for(; x < s1.length + s2.length;){
    if(i < mixLevel){
      if(s1[y] != undefined){
        mix[x] = s1[y];
        x++;
      }
      y++;
      i++;
    }
    if(i >= mixLevel && i < 2*mixLevel){
      if(s2[z] != undefined){
        mix[x] = s2[z];
        x++;
      }
      z++;
      i++;
    }else if(i >= 2*mixLevel){
      i = 0;
    }
  }
  return mix;
}

//node testing
// var fs = require('fs');
var mix = [{}];
var s1 = [{}]; //require('./songList1.json');
var s2 = [[]]; //require('./songList2.json');

//mix = mixer(mixLevel, s1, s2);

function addSong(event){
  //var addButton = document.getElementById('add-song');
  var addSongContainer = addButton.parentNode.parentNode;
  if(addSongContainer.classList.contains('left')){
    console.log("this happened");
    var title = getElementById('titleleft');
    var artist = getElementById('artistleft');
    s1.push({
      title: title,
      artist: artist
    })
    addSongContainer.removeChild(addSongContainer.lastChild);
    var playlistHTML = Handlebars.templates.playListTemplate(s1)
    addSongContainer.insertAdjacentHTML('beforeend', playlistHTML);
  }else if(addSongContainer.classList.contains('right')){
    var title = getElementById('titleright');
    var artist = getElementById('artistright');
    s2.push({
      title: title,
      artist: artist
    })
    addSongContainer.removeChild(addSongContainer.lastChild);
    var playlistHTML = Handlebars.templates.playListTemplate(s2)
    addSongContainer.insertAdjacentHTML('beforeend', playlistHTML);

  }
}

function mixPlaylists(event){
  var mixLevel = document.getElementById('mix-level').value;
  mix = mixer(mixLevel, s1, s2);
  // fs.writeFile('./mix.json', JSON.stringify(songListHolder), (err) => {
  //   if(err) {
  //     console.error(err);
  //     return;
  //   };
  // });
  var songListHolder = [
    {
      playListName: 'Playlist 1',
      list: s1
    },
    {
      playListName: 'Playlist 2',
      list: s2
    },
    {
      playListName: 'Playlist Mix!',
      list: mix
    }
  ];

  window.location='/playlist/gettingClose';
}

window.addEventListener('DOMContentLoaded', function(){

  var addButton = document.getElementsByClassName('add-song');
  if(addButton) {
    console.log('addbutton is working kinda')
    addButton.addEventListener('click', addSong);
  }

  var mixButton = document.getElementById('mix-button');
  if(mixButton){
    mixButton.addEventListener('click', mixPlaylists)
  }
});

//
// console.log("s1:\n", s1);
// console.log("s2:\n", s2);
//
// console.log("\nMixes");
//
// mix = mixer(1, s1, s2);
// console.log("mix 1:\n", mix);
//
// mix = mixer(2, s1, s2);
// console.log("mix 2:\n", mix);
//
// mix = mixer(3, s1, s2);
// console.log("mix 3:\n", mix);
//
// mix = mixer(4, s1, s2);
// console.log("mix 4:\n", mix);
