var mix = [];
var s1 = [];
var s2 = [];
var songData = [];
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

//adds songs to playlist1
function addSong1(){
  var addSongContainer = document.getElementsByClassName('left');
  var title = document.getElementsByClassName('titleleft')[0].value;
  var artist = document.getElementsByClassName('artistleft')[0].value;
  if(title != '' && artist != ''){
    s1.push({
      title: title,
      artist: artist
    });
    var holder =
      {
        playListName: 'Playlist 1',
        list: s1
      };
    addSongContainer[0].lastElementChild.remove();
    var playlistHTML = Handlebars.templates.playListTemplate(holder);
    addSongContainer[0].insertAdjacentHTML('beforeend', playlistHTML);
  }else {
    alert("Please include a title and artist name");
  }
}

//adds songs to playlist 2
function addSong2(){
  var addSongContainer = document.getElementsByClassName('right');
  var title = document.getElementsByClassName('titleright')[0].value;
  var artist = document.getElementsByClassName('artistright')[0].value;
  console.log("title: ", title);
  if(title != '' && artist != ''){
    s2.push({
      title: title,
      artist: artist
    });
    var holder =
      {
        playListName: 'Playlist 2',
        list: s2
      };
    addSongContainer[0].lastElementChild.remove();
    var playlistHTML = Handlebars.templates.playListTemplate(holder);
    addSongContainer[0].insertAdjacentHTML('beforeend', playlistHTML);
  }else{
    alert("Please include a title and artist name");
  }
}

//mixes the two playlists
function mixPlaylists(event){
  var mixLevel = document.getElementById('mix-level').value;
  mix = mixer(mixLevel, s1, s2);
  var holder =
    {
      playListName: 'Playlist Mix!',
      list: mix
    };
  newName = document.getElementsByClassName('name-playlist')[0].value;
  if(newName != ''){
    console.log("Name:", newName);
    songData = {
      mixTitle: newName,
      mixLists: [{
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
      }]
    };
    if(document.body.lastElementChild.classList.contains('saveButton')){
      document.body.lastElementChild.remove();
    }
    if(document.body.lastElementChild.classList.contains('playListBox')){
      document.body.lastElementChild.remove();
    }
    var playlistHTML = Handlebars.templates.playListTemplate(holder);
    var insertLocation = document.getElementById('mixlist-location');
    insertLocation.insertAdjacentHTML('beforeend', playlistHTML);
    var saveHTML = Handlebars.templates.saveTemplate();
    insertLocation.insertAdjacentHTML('beforeend', saveHTML);

    saveButton = document.getElementById('saveButton');
    var saveButton = document.getElementsByClassName('saveButton');
    console.log("Save Button:", saveButton);
    if(saveButton){
      console.log("saveButton Click??")
      saveButton[0].addEventListener('click', savePlaylists);
    }
  }else{
    alert("Please include a title for the playlist")
  }
}

//saves the playlists
function savePlaylists(event){
  var dataSend = JSON.stringify(songData);

  var request = new XMLHttpRequest();
  var url = "playlist/" + songData.mixTitle + "/new";
  request.open("POST", url);

  request.setRequestHeader('Content-Type', 'application/json')
  request.send(dataSend);

  request.addEventListener('load', function (event) {
    if(event.target.status === 200 ) {
      window.location.href = '/playlist/' + songData.mixTitle;
    }else {
      alert("Error: ", + event.target.response);
    }
  });
}

//searches
function searchBar(event) {
  var search = event.currentTarget.value.toLowerCase();
  var playlists = document.getElementsByClassName('playlistBox');
  for(var i = 0; i < playlists.length; i++) {
    var title = playlists[i].firstElementChild;
    if(title.textContent.toLowerCase().indexOf(search) >= 0){
      playlists[i].classList.remove('hidden');
    }else {
      playlists[i].classList.add('hidden');
    }
  }
}

//when clicking on playlist on homescreen
function playlistClick(event){
  window.location.href = '/playlist/' + event.currentTarget.firstElementChild.textContent;
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
  var searchButton = document.getElementById('navbar-search-input');
  if(searchButton){
     searchButton.addEventListener('input', searchBar);
  }
  var playlistButton = document.getElementsByClassName('playlistBox');
  if(playlistButton.length != 0){
    for(var i = 0; i < playlistButton.length; i++){
      playlistButton[i].addEventListener('click', playlistClick);
    }
  }
});
