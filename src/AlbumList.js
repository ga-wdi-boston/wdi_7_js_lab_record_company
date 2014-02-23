var AlbumList = AlbumList || {};

AlbumList.drop_down = function(){
	var select = document.getElementById("band-name"),
	    options = artist_arr,
	    artist,
	    option_element;

	  artist = options[options.length - 1];
	  option_element = document.createElement("option");
	  option_element.textContent = artist.name;
	  option_element.value = options.length - 1;
	  select.appendChild(option_element);
};

AlbumList.addAlbum = function(event){
  event.preventDefault();
  var the_artist,
      the_album,
      albumElement = document.createElement('li'),
      inputTextName = document.getElementById('input-text-name-album'),
      selectBandName = document.getElementById('band-name'),
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

  // artist_arr[album_arr[0].band_index].name = the name of the band
  // storing band  by index to avoid dupicating data
  the_album = new Album(inputTextName.value, selectBandName.value, inputTextYear.value);
  the_artist = artist_arr[selectBandName.value]
  the_artist.addAlbumToArtist(the_album);
  album_arr.push(the_album);

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
