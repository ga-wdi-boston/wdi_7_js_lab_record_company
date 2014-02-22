var ArtistList = ArtistList || {};
artist_arr = []

Artist = function(name,description){
	if(name.length > 0 && description.length > 0){
		this.name = name;
		this.description = description;
		this.albums = [];
	} else {
		throw new Error('must enter a name and description');
	}
};

Artist.prototype.addAlbumToArtist = function(event) {
	this.albums.push(album);
};

ArtistList.artistDelete = function(event){
  var artist_list_array = event.target.id.split('_'),
  list = document.getElementById('artists-list'),
  id,artist;

  id = artist_list_array[artist_list_array.length - 1];
  //artist = event.target.parentNode (same as but it is more fragile)
  artist = document.getElementById('artistElement_' + id);
  list.removeChild(artist);
};



ArtistList.addArtist = function(event){
 // create an artist element
 event.preventDefault();
 var new_one_artist,
 artistElement = document.createElement('li'),
 inputTextName = document.getElementById('input-text-name'),
 inputTextDescription = document.getElementById('input-text-description'),
 artistElement_button = document.createElement('button'),
 list = document.getElementById('artists-list'),
 artistElement_counter;

 artistElement_counter = parseInt(list.getAttribute('data-counter'));
 artistElement.setAttribute('id', 'artistElement_'+ artistElement_counter);

 artistElement_button.setAttribute('id', 'artistElement_button_'+ artistElement_counter);
 artistElement_counter += 1;

 artistElement.innerText = inputTextName.value;
 artistElement_button.innerText = 'Delete';

 new_one_artist = new Artist(inputTextName.value,inputTextDescription.value)
 artist_arr.push(new_one_artist)

 list.setAttribute('data-counter', artistElement_counter);
 artistElement.appendChild(artistElement_button);
 list.appendChild(artistElement);

 inputTextName.value = '';
 inputTextDescription.value = '';
};

ArtistList.artistDelete = function(event){
  var artist_list_array = event.target.id.split('_'),
  list = document.getElementById('artists-list'),
  id,artist;

  id = artist_list_array[artist_list_array.length - 1];
  //artist = event.target.parentNode (same as but it is more fragile)
  artist = document.getElementById('artistElement_' + id);
  list.removeChild(artist);
};

