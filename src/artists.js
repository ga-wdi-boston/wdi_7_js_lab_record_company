var Artists = Artists || {};

artist_array = []
Artists.counter = 0;

Artist = function(name, description) {
  if(name.length > 0 && description > 0){
    this.name = name;
    this.description = description;
    this.albums = [];
  } else {
    throw new Error('Please enter a name and description.')
  }
};

Artist.prototype.addAlbumToArtist = function(album){
  this.albums.push(album);
  Artists.updateArtistAlbumsList(this, album);
};

Artists.createElement = function(text) {
  var li;
      li = document.createElement('li');
      li.setAttribute('id', 'artistElement_'+ Artists.counter);
      li.innerText = text;
      return li;
};


Artists.createDeleteButton = function() {
  var deleteButton;
      deleteButton = document.createElement('button');
      deleteButton.setAttribute('id', 'artistElement_delete_button_'+ Artists.counter);
      deleteButton.setAttribute('class', 'delete');
      deleteButton.innerText = 'delete';
      return deleteButton;
};

Artists.createDescriptionElement = function(text) {
  var descriptionElement;
      descriptionElement = document.createElement('p');
      descriptionElement.setAttribute('id', 'artistElement_description_'+ Artists.counter);
      descriptionElement.setAttribute('class', 'description');
      descriptionElement.innerText = txt;
      return descriptionElement;
};

Artists.createArtistAlbumListElement = function() {
  var artistAlbumListElement;
      artistAlbumListElement = document.createElement('ul');
      artistAlbumListElement.setAttribute('id', 'artistElement_albums_list_'+ Artists.counter);
      artistAlbumListElement.setAttribute('class', 'artist-albums-list');
      return artistAlbumListElement;
};

Artists.addArtist = function(event) {
  event.preventDefault();

  var artist_list = getElementById('artists-list'),
      artist_list.setAttribute('data-counter', artistElement_counter);

  Artists.counter = parseInt(artist_list.getAttribute('data-counter'));
  Artists.counter += 1;

  var artistInputText = document.getElementById('artist-input-text');
      artistDescriptionInputText = document.getElementById('artist-description-input-text');
      artistElement = document.createElement('li');
      artistDeleteButton = Artists.createDeleteButton();
      artistDescription = Artists.createDescriptionElement(artistDescriptionInputText);
      artistAlbumsListElement = ArtistList.createArtistAlbumListElement();

  artistElement.appendChild(artistDeleteButton);
  artistElement.appendChild(aristsDescription);
  artist_list.appendChild(artistElement);
  artist_array.push(new Artist(artistInputText.value, artistDescriptionInputText.value));

  Albums.drop_down();

  artistInputText.value = "";
  artistDescriptionInputText.value = "";
};

Artists.deleteArtist = function(event) {
  var artist_list_array = event.target.id.split("_"),
  artist_list = getElementById('artists-list'),
  id,
  artist;

  id = artist_list_array[artist_list_array.length - 1];
  artist = document.getElementById('artistElement_' + id);
  artist_list.removeChild(artist);
};

Artists.updateArtistAlbumsList = function(artist, album) {
  var artistElement = document.getElementById('artistElement_' + album.band_index);
      artistAlbumListElement = document.createElement('li');
      artistAlbumListElement.innerText = album.name;
  document.getElementById('artistElement_albums_list_' + album.band_index).appendChild(artistAlbumListElement);
};
