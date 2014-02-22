window.onload = function() {
  var addArtistButton = document.getElementById('add-artist'),
                 list = document.getElementById('artists-list');
   list.addEventListener('click', ArtistList.artistDelete, false);
   addArtistButton.addEventListener('click', ArtistList.addArtist, false);
};


