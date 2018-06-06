var mix = [];
var s1 = [];
var s2 = [];
var songData = [];
var tempData = [];

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
      subPlaylistName: 'Playlist 1',
      list: s1
    };
  //tempData.push(holder);
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
      subPlaylistName: 'Playlist 2',
      list: s2
    };
  //tempData.push(holder);
  addSongContainer[0].lastElementChild.remove();
  var playlistHTML = Handlebars.templates.playListTemplate(holder);
  addSongContainer[0].insertAdjacentHTML('beforeend', playlistHTML);
}

function mixPlaylists(event){
  var mixLevel = document.getElementById('mix-level').value;
  mix = mixer(mixLevel, s1, s2);
  var holder =
    {
      subPlaylistName: 'Playlist Mix!',
      list: mix
    };
  songData = [{
    mixTitle: "Demo",
    mixLists: [{
      subPlaylistName: 'Playlist 1',
      list: s1
    },
    {
      subPlaylistName: 'Playlist 2',
      list: s2
    },
    {
      subPlaylistName: 'Playlist Mix!',
      list: mix
    }]
  }];
  if(document.body.lastElementChild.classList.contains('saveButton')){
    document.body.lastElementChild.remove();
  }
  if(document.body.lastElementChild.classList.contains('playListBox')){
    document.body.lastElementChild.remove();
  }
  var playlistHTML = Handlebars.templates.playListTemplate(holder);
  document.body.insertAdjacentHTML('beforeend', playlistHTML);
  //window.location='/playlist/gettingClose';

  //var save = document.getElementsByClassName('saveButton');
  //console.log(save[0]);
  //saveButton.classList.remove('hidden');
  var saveHTML = Handlebars.templates.saveTemplate();
  document.body.insertAdjacentHTML('beforeend', saveHTML);

  saveButton = document.getElementById('saveButton');
  var saveButton = document.getElementsByClassName('saveButton');
  console.log("Save Button:", saveButton);
  if(saveButton){
    console.log("saveButton Click??")
    saveButton[0].addEventListener('click', savePlaylists);
  }
}

function savePlaylists(event){
  // var songData = {
  //   title: "Demo",
  //   lists: tempData
  // }
  var dataSend = JSON.stringify(songData);
  console.log("holderSend:",  songData);
  console.log("Title:",  songData[0].mixTitle);

  var request = new XMLHttpRequest();
  var url = "playlist/" + songData[0].mixTitle + "/new";
  request.open("POST", url);

  request.setRequestHeader('Content-Type', 'application/json')
  request.send(dataSend);

  request.addEventListener('load', function (event) {
    if(event.target.status === 200) {
      // setTimeout(function() {
      //   window.location.href = '/playlist/' + songData[0].title;
      // }, 2000);
      window.location= '/playlist/' + songData[0].mixTitle;
    }else {
      alert("Error: ", + event.target.response);
    }
  });
}

window.addEventListener('DOMContentLoaded', function(){
  var addButtonLeft = document.getElementsByClassName('add-song-left');
  console.log(addButtonLeft);
  if(addButtonLeft.length != 0) {
    console.log('addbutton is working kinda');
    addButtonLeft[0].addEventListener('click', addSong1);
  }
  var addButtonRight = document.getElementsByClassName('add-song-right');
  if(addButtonRight.length != 0) {
    console.log('addbutton is working kinda');
    addButtonRight[0].addEventListener('click', addSong2);
  }
  var mixButton = document.getElementById('mix-button');
  if(mixButton){
    mixButton.addEventListener('click', mixPlaylists);
  }
  // var saveButton = document.getElementsByClassName('saveButton');
  // console.log("SaveButton:",saveButton);
  // if(saveButton){
  //   console.log("saveButton Click??")
  //   saveButton.addEventListener('click', savePlaylists);
  // }
});
