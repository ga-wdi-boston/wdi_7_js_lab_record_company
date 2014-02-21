var RCApp = RCApp || {};

RCApp.addArtist = function(event){
  var artist = document.createElement('li'),
      artist_delete_button = document.createElement('delete-button'),
      artist_list = document.getElementById('artist-list'),
      artist_counter;
  artist_counter = parseInt(artist_list.getAttribute('data-counter'));
  artist.setAttribute('id', 'artist_' + artist_counter);

  artist_delete_button.setAttribute('id', 'artist_delete_button_' + artist_counter);

  artist_counter += 1;

  artist.innerHTML = event.target.value;
  artist_delete_button.value = 'Delete';

  artist_list.setAttribute('data-counter', artist_counter);

  artist.appendChild(artist_delete_button);

  artist_list.appendChild(artist);
  event.target.value = '';

}