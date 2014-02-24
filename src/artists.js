var RCApp = RCApp || {};

RCApp.addArtist = function(event){

  var artist = document.createElement('li'),
      artist_name = document.createElement('li'),
      artist_delete_button = document.createElement('button'),
      artist_show_button = document.createElement('button'),
      artist_unshow_button = document.createElement('button'),
      artist_info = document.createElement('li'),
      artist_list = document.getElementById('artist-list'),
      artist_counter;

  artist_counter = parseInt(artist_list.getAttribute('data-counter'));
  artist.setAttribute('id', 'artist_' + artist_counter);
  artist_name.setAttribute('id', 'artist_name_' + artist_counter);
  artist_show_button.setAttribute('id', 'artist_show_button_' + artist_counter);
  artist_delete_button.setAttribute('id', 'artist_delete_button_' + artist_counter);
  artist_unshow_button.setAttribute('id', 'artist_unshow_button_' + artist_counter);
  artist_info.setAttribute('id', 'artist_info_'+ artist_counter);

  artist_counter += 1;


  artist.innerText = artistName.value + '  ';
  artist.setAttribute('data-name', artistName.value);
  artist.setAttribute('data-info', event.target.value);
  artist_show_button.innerText = "Show";
  artist_delete_button.innerText = 'Delete';

  artist_list.setAttribute('data-counter', artist_counter);

  artist.appendChild(artist_delete_button);
  artist.appendChild(artist_show_button);


  artist_list.appendChild(artist);
  event.target.value = '';
  artistName.value = '';

}

RCApp.artistDelete = function(event){
  var artist_array = event.target.id.split('_'),
  artist_list = document.getElementById('artist-list'), id, artist;

  id = artist_array[artist_array.length - 1];
  artist = document.getElementById('artist_' + id);
  if("artist_delete_button_" + event.target.id.charAt(event.target.id.length - 1) === event.target.id){
    artist_list.removeChild(artist);
  };
}


RCApp.artistShow = function(event){
  var artist_array = event.target.id.split('_'),
  artist_list = document.getElementById('artist-list'), id, artist,
  album_list = document.getElementById('album-list'),

  albumNameAdd = document.createElement('input'),
  albumButtonAdd = document.createElement('button'),
  id = event.target.id.charAt(event.target.id.length - 1);


  albumButtonAdd.innerText = "Create album";
  albumButtonAdd.style.color = "blue";

  id = artist_array[artist_array.length - 1];
  artist = document.getElementById('artist_' + id);
  artist_show_button = document.getElementById('artist_show_button_' + id);
  artist_delete_button = document.getElementById('artist_delete_button_' + id);

  artist_info = artist.getAttribute('data-info');
  artist_name = artist.getAttribute('data-name');

  if(artist_show_button.innerText === 'Show'){
    artist_show_button.innerText = "Unshow";
    artist.innerHTML += ('<br>' + artist_info +'<br>' + 'name:');

    artist.appendChild(albumNameAdd);
    artist.appendChild(albumButtonAdd);
    if("artist_show_button_" + event.target.id.charAt(event.target.id.length -1) === event.target.id){
      artist_list.appendChild(artist);
    };

    albumNameAdd.addEventListener('change', RCApp.addAlbumFrom, false);
  } else {
    artist_show_button.innerText = "Show";
    artist.innerHTML = null;

    artist.innerHTML += artist_name;
    artist.appendChild(artist_delete_button);
    artist.appendChild(artist_show_button);
  };
}
















