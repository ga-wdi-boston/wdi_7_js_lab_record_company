var ArtistList = ArtistList || {};

ArtistList.addArtist = function(event){
 // create an artist element
 var artist = document.createElement('li'),
 artist_button = document.createElement('button'),
 list = document.getElementById('artists-list'),
 artist_counter;
 // get the number of items in list from the list
 // data-counter attribute
 artist_counter = parseInt(list.getAttribute('data-counter'));
 artist.setAttribute('id', 'artist_'+ artist_counter);
 // set the artist delete button id
 artist_button.setAttribute('id', 'artist_button_'+ artist_counter);
 artist_counter += 1;
 artist.innerText = event.target.value + '  ';
 artist_button.innerText = 'Delete';
 // increment the number of artists in list
 list.setAttribute('data-counter', artist_counter);
 artist.appendChild(artist_button);
 list.appendChild(artist);
 event.target.value = '';
};

ArtistList.artistDelete = function(event){
  var artist_array = event.target.id.split('_'),
  list = document.getElementById('artists-list'),
  id,artist;

  id = artist_array[artist_array.length - 1];
  //artist = event.target.parentNode (same as but it is more fragile)
  artist = document.getElementById('artist_' + id);
  list.removeChild(artist);
};

