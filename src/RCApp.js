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

  album_button.onclick = function(event) {
    event.preventDefault();
    var new_album = new Album((document.getElementById('new-album-name').value), (document.getElementById('band-name').value), (document.getElementById('year-released').value));
    RCApp.add_to_album_list(album_list, new_album);
    return false;
  };

  artist_list.addEventListener('click', RCApp.artistItemDelete, false);
  album_list.addEventListener('click', RCApp.albumItemDelete, false);
};

var RCApp = {

};

RCApp.add_to_artist_list = function(list, artist) {
  var artist_to_add = artist.render_artist();
  list.appendChild(artist_to_add);
  return true;
};

RCApp.add_to_album_list = function(list, album) {
  var album_to_add = album.render_album();
  list.appendChild(album_to_add);
  return true;
};

RCApp.artistItemDelete = function(event){
  var item_array = event.target.id.split('_'),
  list = document.getElementById('artist-list'),
  id, item;

  id = item_array[item_array.length - 1];
  item = document.getElementById('item_' + id);
  list.removeChild(item);
};
