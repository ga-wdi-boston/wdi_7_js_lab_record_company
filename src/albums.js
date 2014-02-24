
var RCApp = RCApp || {};

RCApp.addAlbum = function(event){

  var album = document.createElement('li'),
      album_delete_button = document.createElement('button'),
      album_show_button = document.createElement('button'),
      album_info = document.createElement('li'),
      album_band_name = document.createElement('li'),
      album_year = document.createElement('li'),
      album_list = document.getElementById('album-list'),
      album_counter;

  album_counter = parseInt(album_list.getAttribute('data-counter'));
  album.setAttribute('id', 'album_' + album_counter);
  album_show_button.setAttribute('id', 'album_show_button_' + album_counter);
  album_delete_button.setAttribute('id', 'album_delete_button_' + album_counter);
  album_band_name.setAttribute('id', 'album_band_name_'+ album_counter);
  album_year.setAttribute('id', 'album_year_' + album_counter);

  album_counter += 1;



  album.innerText = albumName.value + '  ';
  album.setAttribute('data-name', albumName.value);
  album.setAttribute('data-band-name', albumBandName.value);
  album.setAttribute('data-year', event.target.value);
  album_show_button.innerText = "Show";
  album_delete_button.innerText = 'Delete';

  album_list.setAttribute('data-counter', album_counter);

  album.appendChild(album_delete_button);
  album.appendChild(album_show_button);


  album_list.appendChild(album);
  event.target.value = '';
  albumName.value = '';
  albumBandName.value = '';

}

RCApp.addAlbumFrom = function(event){

  var album = document.createElement('li'),
      album_delete_button = document.createElement('button'),
      album_show_button = document.createElement('button'),
      // album_info = document.createElement('li'),
      album_list = document.getElementById('album-list'),
      album_counter,
      artist_list = document.getElementById('artist-list'),
      artist = document.getElementById('artist_' + event.target.id.charAt(event.target.id.length - 1));

  album_counter = parseInt(album_list.getAttribute('data-counter'));
  album.setAttribute('id', 'album_' + album_counter);
  album_show_button.setAttribute('id', 'album_show_button_' + album_counter);
  album_delete_button.setAttribute('id', 'album_delete_button_' + album_counter);

  album_counter += 1;

  album.innerText = event.target.value + '  ';
  album_show_button.innerText = "Show";
  album_delete_button.innerText = 'Delete';

  album_list.setAttribute('data-counter', album_counter);

  // album.appendChild(album_show_button);
  album.appendChild(album_delete_button);

  // artist.appendChild(album);
  // artist_list.appendChild(artist);

  album_list.appendChild(album);
  event.target.value = '';
}

RCApp.albumDelete = function(event){
  var album_array = event.target.id.split('_'),
  album_list = document.getElementById('album-list'), id, album;

  id = album_array[album_array.length - 1];
  album = document.getElementById('album_' + id);
  if("album_delete_button_" + event.target.id.charAt(event.target.id.length -1) === event.target.id){
    album_list.removeChild(album);
  };
}


RCApp.albumShow = function(event){
  var album_array = event.target.id.split('_'),
  album_list = document.getElementById('album-list'), id, album;

  id = album_array[album_array.length - 1];



  album = document.getElementById('album_' + id);
  album_show_button = document.getElementById('album_show_button_' + id);
  album_delete_button = document.getElementById('album_delete_button_' + id);

  album_band_name = album.getAttribute('data-band-name');
  album_year = album.getAttribute('data-year');
  album_name = album.getAttribute('data-name');
  if(album_show_button.innerText === 'Show'){
    album_show_button.innerText = "Unshow";
    album.innerHTML += ('<br>' + album_band_name + '<br>' + album_year);

    if("album_show_button_" + event.target.id.charAt(event.target.id.length -1) === event.target.id){
      album_list.appendChild(album);
    };
  } else {
    album_show_button.innerText = "Show";
    album.innerHTML = null;

    album.innerHTML += album_name;
    album.appendChild(album_delete_button);
    album.appendChild(album_show_button);
  };
}














