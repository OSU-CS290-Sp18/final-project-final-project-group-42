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
var mix = [{playlistTitle: 'Playlist Mix', songs: {}}];
//var s1 = [{PlaylistTitle: 'Playlist 1', songs: {}}]; //require('./songList1.json');
//var s2 = [{PlaylistTitle: 'Playlist 2', songs: {}}]; //require('./songList2.json');
var s1 = [];
var s2 = [];


//mix = mixer(mixLevel, s1, s2);

function addSong1(){
  var addSongContainer = document.getElementsByClassName('left');
  var title = document.getElementsByClassName('titleleft')[0].value;
  var artist = document.getElementsByClassName('artistleft')[0].value;
  s1.push({
    title: title,
    artist: artist
  });
  var holder =
    {
      playListName: 'Playlist 1',
      list: s1
    };
  addSongContainer[0].lastElementChild.remove();//  addSongContainer[0].removeChild(addSongContainer[0].lastChild);
  var playlistHTML = Handlebars.templates.playListTemplate(holder);
  addSongContainer[0].insertAdjacentHTML('beforeend', playlistHTML);
}

function addSong2(){
  var addSongContainer = document.getElementsByClassName('right');
  var title = document.getElementsByClassName('titleright')[0].value;
  var artist = document.getElementsByClassName('artistright')[0].value;
  s2.push({
    title: title,
    artist: artist
  });
  var holder =
    {
      playListName: 'Playlist 2',
      list: s2
    };
  addSongContainer[0].lastElementChild.remove();//  addSongContainer[0].removeChild(addSongContainer[0].lastChild);
  var playlistHTML = Handlebars.templates.playListTemplate(holder);
  addSongContainer[0].insertAdjacentHTML('beforeend', playlistHTML);
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
  var holder =
    {
      playListName: 'Playlist Mix!',
      list: mix
    };
  if(document.body.lastElementChild.classList.contains('saveButton')){
    document.body.lastElementChild.remove();
  }
  if(document.body.lastElementChild.classList.contains('playListBox')){
    document.body.lastElementChild.remove();
  }
  var playlistHTML = Handlebars.templates.playListTemplate(holder);
  document.body.insertAdjacentHTML('beforeend', playlistHTML);
  //window.location='/playlist/gettingClose';
  var saveHTML = Handlebars.templates.saveTemplate();
  document.body.insertAdjacentHTML('beforeend', saveHTML);
}

window.addEventListener('DOMContentLoaded', function(){

  var addButtonLeft = document.getElementsByClassName('add-song-left');
  if(addButtonLeft) {
    console.log('addbutton is working kinda');
    addButtonLeft[0].addEventListener('click', addSong1);
  }
  var addButtonRight = document.getElementsByClassName('add-song-right');
  if(addButtonRight) {
    console.log('addbutton is working kinda');
    addButtonRight[0].addEventListener('click', addSong2);
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
