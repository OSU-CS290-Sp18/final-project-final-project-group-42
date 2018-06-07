var mix = [];
var s1 = [];
var s2 = [];
var songData = {};
var tempData = [];
var newName;
var allPlaylists = [];
var searchButton = document.getElementById('Mixer-Search');
var searchInput = document.getElementById('navbar-search-input');

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
  newName = document.getElementsByClassName('name-playlist')[0].value;
  console.log("Name:", newName);
  songData[newName] = {
    mixTitle: newName,
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
  };
  console.log("songData:", songData);
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
  var dataSend = JSON.stringify(songData);

  var request = new XMLHttpRequest();
  var url = "playlist/" + songData[newName].mixTitle + "/new";
  request.open("POST", url);

  request.setRequestHeader('Content-Type', 'application/json')
  request.send(dataSend);

  request.addEventListener('load', function (event) {
    if(event.target.status === 200) {
      window.location.href = '/playlist/' + songData[newName].mixTitle;
    }else {
      alert("Error: ", + event.target.response);
    }
  });
}

// function insertNewPlaylist(name){
//   var params = {playListName: name};
//   var playListTemplate = Handlebars.templates.playListTemplate(params);
//   var item = document.querySelector('.playlistBoxContainer');
//   item.insertAdjacentHTML('beforeend', playListTemplate);
// }
//
// function playlistMatchesQuery(playlist, query){
//   if(!query){
//     return true;
//   }
//
//   query = query.trim().toLowerCase();
//   return(playlist.playListName).toLowerCase().indexOf(query)>=0;
// }
//
// function parsePlaylists(playlistElem){
//   var playlist = {};
//
//   var playlistTitle = playlistElem.querySelector('.playListName a');
//   playlist.playListName = playlistTitle.textContent.trim();
//
//   return playlist;
// }
//
// function searchUpdate(){
//   var query = document.getElementById('navbar-search-input').value;
//
//   var playlistContainer = document.querySelector('.playlistBoxContainer');
//   if(playlistContainer){
//     while(playlistContainer.lastChild){
//       playlistContainer.removeChild(playlistContainer.lastChild);
//     }
//   }
//
//   allPlayLists.forEach(function (playlist){
//     if(playlistMatchesQuery(playlist, query)){
//         insertNewPlaylist(playlist.playListName);
//     }
//   });
//
// }

window.addEventListener('DOMContentLoaded', function(){
  // var playlistCollection = document.getElementsByClassName('playListName');
  // for(var i = 0; i<playlistCollection.length; i++){
  //   allPlaylists.push(parsePlaylists(playlistCollection[i]));
  // }
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
  // var searchButton = document.getElementById('Mixer-Search');
  // if(searchButton){
  //   searchButton.addEventListener('click', searchUpdate);
  // }
  // var searchInput = document.getElementById('navbar-search-input');
  // if(searchInput){
  //   searchInput.addEventListener('input', searchUpdate);
  // }
});

searchButton.addEventListener('click', function(){
  var i, filter, a;
  filter = searchInput.value.toUpperCase();
  var playlists = document.querySelectorAll('.playlistBoxContainer');
  for(i = 0; i<playlists.length; i++){
    a = playlists[i].getElementsByTagName("a")[0];
    if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
      playlists[i].style.display = "";
    }
    else{
      playlists[i].style.display = "none";
    }
  }
});
