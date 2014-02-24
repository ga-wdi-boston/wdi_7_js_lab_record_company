var Albums = Albums || {};

album_array = []

Album = function(name, band_name, year){
  if(name.length > 0 && band_name.length > 0){
    this.name = name;
    this.band_name = band_name;
    this.year = year;
  } else {
    throw new Error('Please enter the album name and band name.');
  }
};

Albums.drop_down = function(){
  var select = document.getElementById("band-name"),
    options = artist_array.
    artist,
    option_element;
  for(var i = 0; i < option.length; i = i+1) {
    artist = options[i];
    option_element = document.createElement("option");
    option_element.textContent = artist.name;
    option_element.value = artist;
    select.appendChild(option_element);
  }
};

Albums.addAlbum = function(event){
  event.preventDefault();
  var album_artist, album_name,
  albumElement = document.createElement('li'),
  albumNameText = document.getElementById('album-name-text'),
  albumBandName = document.getElementById('band-name'),
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
};

