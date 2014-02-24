var AlbumList = AlbumList || {};

AlbumList.counter = 0;

AlbumList.drop_down = function(){
	var select = document.getElementById("band-name"),
	    options = artist_arr,
	    artist,
      id,
	    option_element;

  artist = options[options.length - 1];
  id = options.length - 1
  option_element = document.createElement("option");
  option_element.setAttribute('id', 'album_artist_option_'+ id );
  option_element.textContent = artist.name;
  option_element.value = options.length - 1;
  select.appendChild(option_element);
};

AlbumList.delete_from_drop_down = function(artist_id){
  var select = document.getElementById("band-name"),
      options = artist_arr,
      artist,
      option_element;
  artist = options[artist_id];
  option_element = document.getElementById("album_artist_option_" + artist_id);
  select.removeChild(option_element);
};

AlbumList.createElement = function(txt) {
  var li;
  li = document.createElement('li');
  li.setAttribute('id', 'albumElement_'+  AlbumList.counter);
  li.innerText = txt;
  return li;
};

AlbumList.createButton = function() {
  var deleteButton;
  deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'albumElement_button_'+ AlbumList.counter);
  deleteButton.setAttribute('class', 'delete');
  deleteButton.innerText = 'delete';
  return deleteButton;
};

AlbumList.addAlbum = function(event){
  event.preventDefault();
  // set counter
  var the_album,
      the_artist,
      albumElement = AlbumList.createElement(inputTextName),
      albumsList = document.getElementById('albums-list'),
      inputTextName = document.getElementById('input-text-name-album'),
      selectBandName = document.getElementById('band-name'),
      albumElement_button = AlbumList.createButton(),
      inputTextYear = document.getElementById('input-text-year');

  AlbumList.counter = parseInt(albumsList.getAttribute('data-counter'));
  albumsList.setAttribute('data-counter', AlbumList.counter);

  // artist_arr[album_arr[0].band_index].name = the name of the band
  // storing band  by index to avoid dupicating data
  the_album = new Album(inputTextName.value, selectBandName.value, inputTextYear.value);

  the_artist = artist_arr[selectBandName.value]
  the_artist.addAlbumToArtist(the_album);
  album_arr.push(the_album);

  albumsList.setAttribute('data-counter', AlbumList.counter);
  albumElement.appendChild(albumElement_button);
  albumsList.appendChild(albumElement);


  AlbumList.counter += 1;
  inputTextName.value = '';
  inputTextYear.value = '';
};

AlbumList.albumDelete = function(event){
  var target = event.target;
  if(target.nodeName !== "BUTTON") {
    return;
  }

  var album_list_array = event.target.id.split('_'),
  list = document.getElementById('albums-list'),
  id,album;

  id = album_list_array[album_list_array.length - 1];
  album = document.getElementById('albumElement_' + id);
  list.removeChild(album);
};
