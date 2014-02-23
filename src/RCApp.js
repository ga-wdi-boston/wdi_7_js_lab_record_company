window.onload = function() {
  var artist_list = document.getElementById('artist-list'),
  album_list = document.getElementById('album-list'),
  artist_button = document.getElementById('add-artist'),
  album_button = document.getElementById('add-album');

  artist_button.onclick = function(event) {
    event.preventDefault();
    var new_artist = new Artist((document.getElementById('new-artist-name').value), (document.getElementById('new-artist-description').value));
    RCApp.add_to_artist_list(artist_list, new_artist);
    return false;
  };
};

var RCApp = {

};

RCApp.add_to_artist_list = function(list, artist) {
  var artist_to_add = artist.render();
  list.appendChild(artist_to_add);
  return true;
};
