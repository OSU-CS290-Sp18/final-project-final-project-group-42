var mix = [{playlistTitle: 'Playlist Mix', songs: {}}];
var s1 = [];
var s2 = [];

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
  addSongContainer[0].lastElementChild.remove();
  var playlistHTML = Handlebars.templates.playListTemplate(holder);
  addSongContainer[0].insertAdjacentHTML('beforeend', playlistHTML);
}

function mixPlaylists(event){
  var mixLevel = document.getElementById('mix-level').value;
  mix = mixer(mixLevel, s1, s2);
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

function savePlaylists(){
  var holderSend = JSON.stringify(holder);

  var request = new XMLHttpRequest();
  var url = "playlist/" + holder.PlayListName + "/new";
  request.open("POST", url);

  request.setRequestHeader('Content-Type', 'application/json')
  request.send(holderSend);

  request.addEventListener('click', function (event) {
    if(event.target.status === 200) {
        window.location= '/playlist/' + holder.PlaylistName;
    }else {
      alert("Error: ", + event.target.response);
    }
  });
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
    mixButton.addEventListener('click', mixPlaylists);
  }
  var saveButton = document.getElementById('saveButton');
  if(saveButton){
    saveButton.addEventListener('click', savePlaylists);
  }
});
