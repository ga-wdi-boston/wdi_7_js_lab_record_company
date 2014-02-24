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

AlbumList.createDeleteButton = function() {
  var deleteButton;
  deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'albumElement_button_'+ AlbumList.counter);
  deleteButton.setAttribute('class', 'delete');
  deleteButton.innerText = 'delete';
  return deleteButton;
};

AlbumList.createInfoButton = function() {
  var infoButton;
  infoButton = document.createElement('button');
  infoButton.setAttribute('id', 'albumElement_info_button_'+ AlbumList.counter);
  infoButton.setAttribute('class', 'show');
  infoButton.innerText = 'show/hide info';
  return infoButton;
};

AlbumList.createBandNameElement = function(txt) {
  var bandNameElement;
  bandNameElement = document.createElement('p');
  bandNameElement.setAttribute('id', 'albumElement_band_name_'+ AlbumList.counter);
  bandNameElement.setAttribute('class', 'band_name');
  bandNameElement.innerText = txt;
  return bandNameElement;
};

AlbumList.createYearReleasedElement = function(year) {
  var releaseYearElement;
  releaseYearElement = document.createElement('p');
  releaseYearElement.setAttribute('id', 'albumElement_release_year_'+ AlbumList.counter);
  releaseYearElement.setAttribute('class', 'release_year');
  releaseYearElement.innerText = year;
  return releaseYearElement;
};

AlbumList.createToggleElement = function() {
  var toggleElement;
  toggleElement = document.createElement('div');
  toggleElement.setAttribute('id', 'albumElement_toggle_'+ AlbumList.counter);
  toggleElement.setAttribute('class', 'no-display');
  return toggleElement;
};

AlbumList.addAlbum = function(event){
  event.preventDefault();
  var the_album,
      the_artist,
      albumsList,
      inputTextName = document.getElementById('input-text-name-album'),
      selectBandName = document.getElementById('band-name'),
      albumElement = AlbumList.createElement(inputTextName.value),
      albumElement_button = AlbumList.createDeleteButton(),
      inputTextYear = document.getElementById('input-text-year'),
      albumInfoButtonElement = AlbumList.createInfoButton(),
      albumBandNameElement = AlbumList.createBandNameElement(artist_arr[selectBandName.value].name),
      albumReleaseYearElement = AlbumList.createYearReleasedElement(inputTextYear.value),
      albumToggleElement = AlbumList.createToggleElement();

  albumsList = document.getElementById('albums-list');
  albumsList.setAttribute('data-counter', AlbumList.counter);
  AlbumList.counter = parseInt(albumsList.getAttribute('data-counter'));

  // artist_arr[album_arr[0].band_index].name = the name of the band
  // storing band  by index to avoid dupicating data
  the_album = new Album(inputTextName.value, selectBandName.value, inputTextYear.value);

  the_artist = artist_arr[selectBandName.value]
  the_artist.addAlbumToArtist(the_album);
  album_arr.push(the_album);

  albumsList.setAttribute('data-counter', AlbumList.counter);
  albumElement.appendChild(albumElement_button);
  albumElement.appendChild(albumInfoButtonElement);
  albumElement.appendChild(albumToggleElement);
  albumToggleElement.appendChild(albumBandNameElement);
  albumToggleElement.appendChild(albumReleaseYearElement);
  albumsList.appendChild(albumElement);


  AlbumList.counter += 1;
  inputTextName.value = '';
  inputTextYear.value = '';
};

AlbumList.albumDelete = function(event){
  var target = event.target;
  if(target.nodeName !== "BUTTON" || target.className === "show") {
    return;
  }

  var album_list_array = event.target.id.split('_'),
  list = document.getElementById('albums-list'),
  id,album;

  id = album_list_array[album_list_array.length - 1];
  album = document.getElementById('albumElement_' + id);
  list.removeChild(album);
};

AlbumList.toggleAlbumInfo = function(event){
  var target = event.target, list, albums_list_array,id, div;
  if(target.nodeName !== "BUTTON" || target.className === "delete") {
    return;
  }

  list = document.getElementById('albums-list');
  albums_list_array = event.target.id.split('_');
  id = albums_list_array[albums_list_array.length - 1];
  div = document.getElementById('albumElement_toggle_' + id);

  if (div.className === 'no-display'){
    div.setAttribute('class', 'yes-display');
  } else {
    div.setAttribute('class', 'no-display');
  }
};
