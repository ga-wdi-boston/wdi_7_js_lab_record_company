window.onload = function() {
  var artist_list,
      album_list,
      add_artist_button,
      add_album_button;

  artist_list = document.getElementById('artist-list'),
  album_list = document.getElementById('album-list'),
  add_album_button = document.getElementById('add-album-button'),
  add_artist_button = document.getElementById('add-artist-button');

  add_artist_button.onclick = function(event) {
  event.preventDefault();
  RecordCompany.new_artist(artist_list);
  return false;
  };

  add_album_button.onclick = function(event) {
  event.preventDefault();
  RecordCompany.new_album(album_list);
  return false;
  };
};

RecordCompany = {

   new_artist: function(list) {
    var artist_list = document.getElementById('artist-list'),
      new_li_artist = document.createElement('li'),
      new_artist_name = document.getElementById('new-artist-name-field'),
      new_artist_description = document.getElementById('new-description-field')
      all_artists = [];

    artist_counter = parseInt(artist_list.getAttribute('artist-counter'));
    artist_counter += 1;
    new_li_artist.setAttribute('id', 'artist_' + artist_counter);

    new_artist = new RcApp.Artist(new_artist_name.value, new_artist_description.value);
    all_artists.push(new_artist);

    new_li_artist.innerHTML = new_artist_name.value;
    new_artist_name.field = "";
    if(new_li_artist.innerHTML !== "") {
      artist_list.appendChild(new_li_artist);
    };
  },
  new_album: function(list) {
    var album_list = document.getElementById('album-list'),
      new_li_album = document.createElement('li'),
      new_album_name = document.getElementById('new-album-field'),
      new_album_bandname = document.getElementById('new-bandname-field'),
      new_album_year = document.getElementById('new-year-field'),
      all_albums = [];


    album_counter = parseInt(album_list.getAttribute('album-counter'));
    album_counter += 1;
    new_li_album.setAttribute('id', 'album_' + album_counter);
    new_album = new RcApp.Album(new_album_name.value, new_album_bandname.value, new_album_year.value);
    all_albums.push(new_album);

    new_li_album.innerHTML = new_album_name.value;
    new_album_name.field = "";
    if(new_li_album.innerHTML !== "") {
      album_list.appendChild(new_li_album);
    };
  }
};



