var Albums = Albums || {};

album_array = []

Album = function(name, band_index, year){
  if(name.length > 0 && band_index.length > 0){
    this.name = name;
    this.band_index = band_index;
    this.year = year;
  } else {
    throw new Error('Please enter the album name and band name.')
  }
};

Albums.drop_down = function(){
  var select = document.getElementById("band-name"),
    options = artist_array,
    artist,
    id,
    option_element;

    artist = options[options.length - 1];
    id = options.length - 1
    option_element = document.createElement("option");
    option_element.textContent = artist.name;
    option_element.value = options.length - 1;
    select.appendChild(option_element);
};

Albums.drop_down_delete = function(artist_id){
  var select = document.getElementById("band-name"),
      options = artist_array,
      artist = options[artist_id];
      option_element = document.getElementById("album_artist_option_" + artist_id);
      select.removeChild(option_element);
};

Albums.addAlbum = function(event){
  event.preventDefault();
  var album_artist,
      album_name,
      albumElement = document.createElement('li'),
      albumNameText = document.getElementById('album-name-text'),
      selectBandName = document.getElementById('band-name'),
      albumYear = document.getElementById('album-year'),
      albumElement_button = document.createElement('button'),
      album_list = document.getElementById('albums-list'),
      albumElement_counter;

      albumElement_counter = parseInt(album_list.getAttribute('data-counter'));
      albumElement.setAttribute('id', 'albumElement_' + albumElement_counter);
      albumElement_button.setAttribute('id', 'albumElement_button_' + albumElement_counter);
      albumElement_counter += 1;

      albumElement.innerText = albumNameText.value;
      albumElement_button.innerText = "Delete";

      album_name = new Album(albumNameText.value, selectBandName.value, albumYear.value);
      album_artist = artist_array[selectBandName.value];
      album_artist.addAlbumToArtist(album_name);
      album_array.push(album_name);

      album_list.setAttribute('data-counter', albumElement_counter);
      albumElement.appendChild(albumElement_button);
      album_list.appendChild(albumElement);
      albumNameText.value = "";
      albumYear.value = "";
};

Albums.deleteAlbum = function(event){
  var album_list_array = event.target.id.split("_"),
  album_list = document.getElementById('albums-list'),
  id,
  album;

  id = album_list_array[album_list_array.length - 1];
  album = document.getElementById('albumElement_' + id);
  album_list.removeChild(album);
  Albums.drop_down_delete(id);
};

