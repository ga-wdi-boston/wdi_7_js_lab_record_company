window.onload = function() {
  var addArtistButton = document.getElementById('add-artist'),
      addAlbumButton = document.getElementById('add-album'),
      artist_list = document.getElementById('artists-list'),
      album_list = document.getElementById('albums-list');

  addAlbumButton.addEventListener('click', Albums.addAlbum, false);
  addArtistButton.addEventListener('click', Artists.addArtist, false);
  artist_list.addEventListener('click', Artists.deleteArtist, false);
  album_list.addEventListener('click', Albums.deleteAlbum, false);
};
