var RCApp = RCApp || {};

RCApp.ArtistList = RCApp.ArtistList || {};

RCApp.artist_arr = [];

RCApp.ArtistListCounter = 0;
RCApp.ArtistCreateLiElement = function(txt) {
	var li;
	li = document.createElement('li');
	li.setAttribute('id', 'artistElement_'+ RCApp.ArtistListCounter);
	li.innerText = txt;
	return li;
};

RCApp.ArtistListCreateDeleteButton = function() {
	var deleteButton;
	deleteButton = document.createElement('button');
	deleteButton.setAttribute('id', 'artistElement_delete_button_'+ RCApp.ArtistListCounter);
	deleteButton.setAttribute('class', 'delete');
	deleteButton.innerText = 'delete';
	return deleteButton;
};

RCApp.ArtistListCreateInfoButton = function() {
	var infoButton;
	infoButton = document.createElement('button');
	infoButton.setAttribute('id', 'artistElement_info_button_'+ RCApp.ArtistListCounter);
	infoButton.setAttribute('class', 'show');
	infoButton.innerText = 'show/hide info';
	return infoButton;
};

RCApp.ArtistListCreateDescriptionElement = function(txt) {
	var descriptionElement;
	descriptionElement = document.createElement('p');
	descriptionElement.setAttribute('id', 'artistElement_description_'+ RCApp.ArtistListCounter);
	descriptionElement.setAttribute('class', 'description');
	descriptionElement.innerText = 'description: ' + txt;
	return descriptionElement;
};

RCApp.ArtistListCreateArtistAlbumListElement = function() {
	var artistAlbumListElement;
	artistAlbumListElement = document.createElement('ul');
	artistAlbumListElement.setAttribute('id', 'artistElement_albums_list_'+ RCApp.ArtistListCounter);
	artistAlbumListElement.setAttribute('class', 'artist-albums-list');
	return artistAlbumListElement;
};

RCApp.ArtistListCreateToggleElement = function() {
	var toggleElement;
	toggleElement = document.createElement('div');
	toggleElement.setAttribute('id', 'artistElement_toggle_'+ RCApp.ArtistListCounter);
	toggleElement.setAttribute('class', 'no-display');
	return toggleElement;
};


RCApp.ArtistListAddArtist = function(event){
	// create an artist element
	event.preventDefault();

	//----------------------------------------------------------------
	// Working with Element(s)
	//----------------------------------------------------------------
	// Get the list the artist will be appended too
	RCApp.ArtistList = document.getElementById('artists-list');
	RCApp.ArtistList.setAttribute('dataCounter', RCApp.ArtistListCounter);

	// Set theCounter
	RCApp.ArtistListCounter = parseInt(RCApp.ArtistList.getAttribute('dataCounter'));

	// Get the artist name from the text field
	var inputTextName = document.getElementById('input-text-name');

	// Get the description from the text field
	var inputTextDescription = document.getElementById('input-text-description');

	// Create the li containining the artist
	var artistElement = RCApp.ArtistCreateLiElement(inputTextName.value);

	// Create the button for deleting an artist
	var artistDeleteButtonElement = RCApp.ArtistListCreateDeleteButton();

	// Create the button for show/hide of artist info
	var artistInfoButtonElement = RCApp.ArtistListCreateInfoButton();

	// Create the albums header
	var artistAlbumHeaderElement = document.createElement('p')
	    artistAlbumHeaderElement.innerText = 'Albums:'

	// Create the description element
	var artistDescriptionElement = RCApp.ArtistListCreateDescriptionElement(inputTextDescription.value);

	// Create the toggle elelment
	var artistToggleElement = RCApp.ArtistListCreateToggleElement();

	// create the list which will have the albums of the given artist in it
	var artistAlbumsListElement = RCApp.ArtistListCreateArtistAlbumListElement();

	artistElement.appendChild(artistDeleteButtonElement);
	artistElement.appendChild(artistInfoButtonElement);
	artistElement.appendChild(artistToggleElement);
	artistToggleElement.appendChild(artistDescriptionElement);
	artistToggleElement.appendChild(artistAlbumHeaderElement);
	artistToggleElement.appendChild(artistAlbumsListElement);

	RCApp.ArtistList.appendChild(artistElement);
	//----------------------------------------------------------------

	//----------------------------------------------------------------
	// Working with Object
	//----------------------------------------------------------------
	RCApp.artist_arr.push(new RCApp.Artist(inputTextName.value, inputTextDescription.value));
	//----------------------------------------------------------------

	// Increase theCounter
	RCApp.ArtistListCounter += 1;

	// Populate Dropdown
	RCApp.AlbumListDrop_down();

	// Clearing text fields
	inputTextName.value = '';
	inputTextDescription.value = '';
};

RCApp.ArtistListToggleArtistInfo = function(event){
  // Step 1: Get the parent node of target (li)
  // Step 2: Get the element with class name artist-description
  // Step 3: Toggle the display of the element with class name artist-description
	var target = event.target, list, artist_list_array,id, div;
	if(target.nodeName !== "BUTTON" || target.className === "delete"){
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

RCApp.ArtistListArtistDelete = function(event){
	var target = event.target;

	if(target.nodeName !== "BUTTON" || target.className === "show"){
		return;
	}

  var artist_list_array = event.target.id.split('_'),
  list = document.getElementById('artists-list'),
  id,artist;

  id = artist_list_array[artist_list_array.length - 1];
  artist = document.getElementById('artistElement_' + id);
  list.removeChild(artist);
  RCApp.AlbumListDelete_from_drop_down(id);
};

RCApp.ArtistListUpdateArtistAlbumsList = function(artist, album) {
	// Step 1: Find the artist
	var artistElement = document.getElementById('artistElement_' + album.band_index);

	// Step 2: Create the li element
	var artistAlbumListElement = document.createElement('li');
	artistAlbumListElement.innerText = album.name;

	// Step 3: Append the created li to the artist's albums list
	document.getElementById('artistElement_albums_list_' + album.band_index).appendChild(artistAlbumListElement);
};
