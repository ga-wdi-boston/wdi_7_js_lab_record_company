var AlbumList = AlbumList || {};
album_arr = []

//Album with a name, band name, and year released
Album = function(name,band_name, release_year){
	if(name.length > 0 && band_name.length > 0){
		this.name = name;
		this.band_name = band_name;
		this.release_year = release_year;
	} else {
		throw new Error('must enter a name and band_name');
	}
};

AlbumList.drop_down = function(){
	var select = document.getElementById("band-name"),
	    options = artist_arr,
	    artist,
	    option_element;
	for(var i = 0; i < options.length; i++) {
	  artist = options[i];
	  option_element = document.createElement("option");
	  option_element.textContent = artist.name;
	  option_element.value = artist;
	  select.appendChild(option_element);
	}
};

AlbumList.addAlbum = function(event){
 event.preventDefault();
 var the_artist,
 the_album,
 albumElement = document.createElement('li'),
 inputTextName = document.getElementById('input-text-name-album'),
 inputTextBandName = document.getElementById('band-name'),
 inputTextYear = document.getElementById('input-text-year'),
 albumElement_button = document.createElement('button'),
 list = document.getElementById('albums-list'),
 albumElement_counter;

 albumElement_counter = parseInt(list.getAttribute('data-counter'));
 albumElement.setAttribute('id', 'albumElement_'+ albumElement_counter);

 albumElement_button.setAttribute('id', 'albumElement_button_'+ albumElement_counter);
 albumElement_counter += 1;

 albumElement.innerText = inputTextName.value;
 albumElement_button.innerText = 'Delete';

 // the_album = new Album(inputTextName.value, inputTextBandName.value, inputTextYear.value);
 // the_artist =
 // the_artist.addAlbumToArtist(the_album);
 // album_arr.push(the_album)

 list.setAttribute('data-counter', albumElement_counter);
 albumElement.appendChild(albumElement_button);
 list.appendChild(albumElement);

 inputTextName.value = '';
 inputTextYear.value = '';
};

AlbumList.albumDelete = function(event){
  var album_list_array = event.target.id.split('_'),
  list = document.getElementById('albums-list'),
  id,album;

  id = album_list_array[album_list_array.length - 1];
  album = document.getElementById('albumElement_' + id);
  list.removeChild(album);
};

