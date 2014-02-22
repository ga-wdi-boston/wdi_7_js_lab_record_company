window.onload = function() {
  var addArtistButton = document.getElementById('add-artist'),
  		 addAlbumButton = document.getElementById('add-album'),
                 artists_list = document.getElementById('artists-list');
   artists_list.addEventListener('click', ArtistList.artistDelete, false);
   addArtistButton.addEventListener('click', ArtistList.addArtist, false);
   addAlbumButton.addEventListener('click', AlbumList.addAlbum, false);
};


