var ArtistList = ArtistList || {};

ArtistList.counter = 0;
ArtistList.createElement = function(txt) {
	var li;
	li = document.createElement('li');
	li.setAttribute('id', 'artistElement_'+ ArtistList.counter);
	li.innerText = txt;
	return li;
};

ArtistList.createDeleteButton = function() {
	var deleteButton;
	deleteButton = document.createElement('button');
	deleteButton.setAttribute('id', 'artistElement_delete_button_'+ ArtistList.counter);
	deleteButton.setAttribute('class', 'delete');
	deleteButton.innerText = 'delete';
	return deleteButton;
};

ArtistList.createInfoButton = function() {
	var infoButton;
	infoButton = document.createElement('button');
	infoButton.setAttribute('id', 'artistElement_info_button_'+ ArtistList.counter);
	infoButton.setAttribute('class', 'show');
	infoButton.innerText = 'show/hide info';
	return infoButton;
};

ArtistList.createDescriptionElement = function(txt) {
	var descriptionElement;
	descriptionElement = document.createElement('p');
	descriptionElement.setAttribute('id', 'artistElement_description_'+ ArtistList.counter);
	descriptionElement.setAttribute('class', 'description');
	descriptionElement.innerText = txt;
	return descriptionElement;
};

ArtistList.createArtistAlbumListElement = function() {
	var artistAlbumListElement;
	artistAlbumListElement = document.createElement('ul');
	artistAlbumListElement.setAttribute('id', 'artistElement_albums_list_'+ ArtistList.counter);
	artistAlbumListElement.setAttribute('class', 'artist-albums-list');
	return artistAlbumListElement;
};

ArtistList.createToggleElement = function() {
	var toggleElement;
	toggleElement = document.createElement('div');
	toggleElement.setAttribute('id', 'artistElement_toggle_'+ ArtistList.counter);
	toggleElement.setAttribute('class', 'no-display');
	return toggleElement;
};

ArtistList.addArtist = function(event){
	// create an artist element
	event.preventDefault();

	//----------------------------------------------------------------
	// Working with Element(s)
	//----------------------------------------------------------------
	// Get the list the artist will be appended too
	var artistList = document.getElementById('artists-list');

	// Set the counter
	ArtistList.counter = parseInt(artistList.getAttribute('data-counter'));
	artistList.setAttribute('data-counter', ArtistList.counter);

	// Get the artist name from the text field
	var inputTextName = document.getElementById('input-text-name');

	// Get the description from the text field
	var inputTextDescription = document.getElementById('input-text-description');

	// Create the li containining the artist
	var artistElement = ArtistList.createElement(inputTextName.value);

	// Create the button for deleting an artist
	var artistDeleteButtonElement = ArtistList.createDeleteButton();

	// Create the button for show/hide of artist info
	var artistInfoButtonElement = ArtistList.createInfoButton();

	// Create the description element
	var artistDescriptionElement = ArtistList.createDescriptionElement(inputTextDescription.value);

	// Create the toggle elelment
	var artistToggleElement = ArtistList.createToggleElement();

	// create the list which will have the albums of the given artist in it
	var artistAlbumsListElement = ArtistList.createArtistAlbumListElement();

	artistElement.appendChild(artistDeleteButtonElement);
	artistElement.appendChild(artistInfoButtonElement);
	artistElement.appendChild(artistToggleElement);
	artistToggleElement.appendChild(artistDescriptionElement);
	artistToggleElement.appendChild(artistAlbumsListElement);

	artistList.appendChild(artistElement);
	//----------------------------------------------------------------

	//----------------------------------------------------------------
	// Working with Object
	//----------------------------------------------------------------
	artist_arr.push(new Artist(inputTextName.value, inputTextDescription.value));
	//----------------------------------------------------------------

	// Increase the counter
	ArtistList.counter += 1;

	// Populate Dropdown
	AlbumList.drop_down();

	// Clearing text fields
	inputTextName.value = '';
	inputTextDescription.value = '';
};

ArtistList.toggleArtistInfo = function(event){
  // Step 1: Get the parent node of target (li)
  // Step 2: Get the element with class name artist-description
  // Step 3: Toggle the display of the element with class name artist-description
	var target = event.target, list, artist_list_array,id, div;
	if(target.nodeName !== "BUTTON" || target.className === "delete" || target.className === "see-albums") {
	  return;
	}

	list = document.getElementById('artists-list');
	artist_list_array = event.target.id.split('_');
	id = artist_list_array[artist_list_array.length - 1];
	div = document.getElementById('artistElement_toggle_' + id);

	if (div.className === 'no-display'){
		div.setAttribute('class', 'yes-display');
	} else {
		div.setAttribute('class', 'no-display');
	}
};

ArtistList.artistDelete = function(event){
	var target = event.target;

	if(target.nodeName !== "BUTTON" || target.className === "show" || target.className === "see-albums"){
		return;
	}

  var artist_list_array = event.target.id.split('_'),
  list = document.getElementById('artists-list'),
  id,artist;

  id = artist_list_array[artist_list_array.length - 1];
  artist = document.getElementById('artistElement_' + id);
  list.removeChild(artist);
  AlbumList.delete_from_drop_down(id);
};

ArtistList.updateArtistAlbumsList = function(artist, album) {
	// Step 1: Find the artist
	var artistElement = document.getElementById('artistElement_' + album.band_index);

	// Step 2: Create the li element
	var artistAlbumListElement = document.createElement('li');
	artistAlbumListElement.innerText = album.name;

	// Step 3: Append the created li to the artist's albums list
	document.getElementById('artistElement_albums_list_' + album.band_index).appendChild(artistAlbumListElement);
};
