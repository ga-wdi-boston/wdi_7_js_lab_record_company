window.onload = function() {
  var addArtistButton = document.getElementById('add-artist'),
    artist_list = document.getElementById('artists-list');

  addArtistButton.addEventListener('click', Artist.addArtist, false);
  artist_list.addEventListener('click', Artists.deleteArtist, false);
};
