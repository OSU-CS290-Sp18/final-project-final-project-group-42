
function insertNewPlaylist(name){
  var params = {playListName: name};
  var playListTemplate = Handlebars.templates.playListTemplate(params);
  var item = document.querySelector('.playlistBoxContainer');
  item.insertAdjacentHTML('beforeend', playListTemplate);
}

function playlistMatchesQuery(playlist, query){
  if(!query){
    return true;
  }

  query = query.trim().toLowerCase();
  return(playlist.playListName).toLowerCase().indexOf(query)>=0;
}

function parsePlaylists(playlistElem){
  var playlist = {};

  var playlistTitle = playlistElem.querySelector('.playListName a');
  playlist.playListName = playlistTitle.textContent.trim();

  return playlist;
}

function searchUpdate(){
  var query = document.getElementById('navbar-search-input').value;

  var playlistContainer = document.querySelector('.playlistBoxContainer');
  if(playlistContainer){
    while(playlistContainer.lastChild){
      playlistContainer.removeChild(playlistContainer.lastChild);
    }
  }

  allPlayLists.forEach(function (playlist){
    if(playlistMatchesQuery(playlist, query)){
        insertNewPlaylist(playlist.playListName);
    }
  });

}

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
