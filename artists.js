var Artists = Artists || {};

artist_array = []

Artist = function(name, description) {
  this.name = name;
  this.description = description;
};

Artists.addArtist = function(event) {
  event.preventDefault();
  var new_artist,
  new_artist = new Artist(artistInputText.value,artistDescriptionInputText.value)
  artist_array.push(new_artist)
  artistElement = document.createElement('li'),
  artistInputText = document.getElementById('artist-input-text'),
  artistDescriptionInputText = document.getElementById('artist-description-input-text'),
  artistElement_button = document.createElement('button'),
  artist_list = getElementById('artists-list'),
  artistElement_counter;
  artistElement_counter = parseInt(artist_list.getAttribute('data-counter'));
  artistElement.setAttribute('id', 'artist_', artist_counter);
  artistElement_button.setAttribute('id', 'artist_button_', artist_counter);
  artistElement_counter += 1;
  artistElement.innerText = artistInputText.value;
  artistElement_button.innerText = "Delete";
  artist_list.setAttribute('data-counter', artistElement_counter);
  artistElement.appendChild(artistElement_button);
  artist_list.appendChild(artistElement);
  artistInputText.value = "";
};

Artists.deleteArtist = function(event) {
  var artist_array = event.target.id.split("_"),
  artist_list = getElementById('artists-list'),
  id,
  artist;

  id = artist_array[artist_array.length - 1];
  artist = document.getElementById('artistElement_' + id);
  artist_list.removeChild(artist);
};
