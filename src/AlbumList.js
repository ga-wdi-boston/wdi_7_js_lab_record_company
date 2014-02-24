var RCApp = RCApp || {};

RCApp.AlbumList = RCApp.AlbumList || {};

RCApp.AlbumListCounter = 0;

RCApp.album_arr = [];

RCApp.AlbumListDrop_down = function(){
	var select = document.getElementById("band-name"),
	    options = RCApp.artist_arr,
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

RCApp.AlbumListDelete_from_drop_down = function(artist_id){
  var select = document.getElementById("band-name"),
      options = RCApp.artist_arr,
      artist,
      option_element;
  artist = options[artist_id];
  option_element = document.getElementById("album_artist_option_" + artist_id);
  select.removeChild(option_element);
};

RCApp.AlbumListCreateLiElement = function(txt) {
  var li;
  li = document.createElement('li');
  li.setAttribute('id', 'albumElement_'+  RCApp.AlbumListCounter);
  li.innerText = txt;
  return li;
};

RCApp.AlbumListCreateDeleteButton = function() {
  var deleteButton;
  deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'albumElement_button_'+ RCApp.AlbumListCounter);
  deleteButton.setAttribute('class', 'delete');
  deleteButton.innerText = 'delete';
  return deleteButton;
};

RCApp.AlbumListCreateInfoButton = function() {
  var infoButton;
  infoButton = document.createElement('button');
  infoButton.setAttribute('id', 'albumElement_info_button_'+ RCApp.AlbumListCounter);
  infoButton.setAttribute('class', 'show');
  infoButton.innerText = 'show/hide info';
  return infoButton;
};

RCApp.AlbumListCreateBandNameElement = function(txt) {
  var bandNameElement;
  bandNameElement = document.createElement('p');
  bandNameElement.setAttribute('id', 'albumElement_band_name_'+ RCApp.AlbumListCounter);
  bandNameElement.setAttribute('class', 'band_name');
  bandNameElement.innerText = 'band name: ' + txt;
  return bandNameElement;
};

RCApp.AlbumListCreateYearReleasedElement = function(year) {
  var releaseYearElement;
  releaseYearElement = document.createElement('p');
  releaseYearElement.setAttribute('id', 'albumElement_release_year_'+ RCApp.AlbumListCounter);
  releaseYearElement.setAttribute('class', 'release_year');
  releaseYearElement.innerText = 'release year: ' + year;
  return releaseYearElement;
};

RCApp.AlbumListCreateToggleElement = function() {
  var toggleElement;
  toggleElement = document.createElement('div');
  toggleElement.setAttribute('id', 'albumElement_toggle_'+ RCApp.AlbumListCounter);
  toggleElement.setAttribute('class', 'no-display');
  return toggleElement;
};

RCApp.AlbumListAddAlbum = function(event){
  event.preventDefault();
  var the_album,
      the_artist,
      albumsList,
      inputTextName = document.getElementById('input-text-name-album'),
      selectBandName = document.getElementById('band-name'),
      albumElement = RCApp.AlbumListCreateLiElement(inputTextName.value),
      albumElement_button = RCApp.AlbumListCreateDeleteButton(),
      inputTextYear = document.getElementById('input-text-year'),
      albumInfoButtonElement = RCApp.AlbumListCreateInfoButton(),
      albumBandNameElement = RCApp.AlbumListCreateBandNameElement(RCApp.artist_arr[selectBandName.value].name),
      albumReleaseYearElement = RCApp.AlbumListCreateYearReleasedElement(inputTextYear.value),
      albumToggleElement = RCApp.AlbumListCreateToggleElement();

  albumsList = document.getElementById('albums-list');
  albumsList.setAttribute('dataCounter', RCApp.AlbumListCounter);
  RCApp.AlbumListCounter = parseInt(albumsList.getAttribute('dataCounter'));

  // artist_arr[album_arr[0].band_index].name = the name of the band
  // storing band  by index to avoid dupicating data
  the_album = new RCApp.Album(inputTextName.value, selectBandName.value, inputTextYear.value);

  the_artist = RCApp.artist_arr[selectBandName.value]
  the_artist.addAlbumToArtist(the_album);
  RCApp.album_arr.push(the_album);

  albumsList.setAttribute('dataCounter', RCApp.AlbumListCounter);
  albumElement.appendChild(albumElement_button);
  albumElement.appendChild(albumInfoButtonElement);
  albumElement.appendChild(albumToggleElement);
  albumToggleElement.appendChild(albumBandNameElement);
  albumToggleElement.appendChild(albumReleaseYearElement);
  albumsList.appendChild(albumElement);


  RCApp.AlbumListCounter += 1;
  inputTextName.value = '';
  inputTextYear.value = '';
};

RCApp.AlbumListAlbumDelete = function(event){
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

RCApp.AlbumListToggleAlbumInfo = function(event){
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
