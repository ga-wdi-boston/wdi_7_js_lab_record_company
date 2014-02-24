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

  artist_list.addEventListener('click', RCApp.artistShowOrDelete, false);
  album_list.addEventListener('click', RCApp.albumShowOrDelete, false);
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

RCApp.artistShowOrDelete = function(event) {
  var item_array = event.target.id.split('_'),
    list = document.getElementById('artist-list'),
    id, item;
  id = item_array[item_array.length - 1];

  if (event.target.className === 'delete') {
    item = document.getElementById('item_' + id);
    list.removeChild(item);

  }else if (event.target.className === 'details') {
    item = document.getElementById('detail_ul_' + id);

    if (item.style.display === "block") {
      item.style.display = "none";
    }
    else {
      item.style.display = "block";
    };
  };
};

RCApp.albumShowOrDelete = function(event) {
  var item_array = event.target.id.split('_'),
    list = document.getElementById('album-list'),
    id, item;
  id = item_array[item_array.length - 1];

  if (event.target.className === 'album-delete') {
    item = document.getElementById('item_' + id);
    list.removeChild(item);

  }else if (event.target.className === 'album-details') {
    item = document.getElementById('album_detail_ul_' + id);

    if (item.style.display === "block") {
      item.style.display = "none";
    }
    else {
      item.style.display = "block";
    };
  };
};
