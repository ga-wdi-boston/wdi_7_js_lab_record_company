window.onload = function() {
  var addArtistButton = document.getElementById('add-artist'),
  		 addAlbumButton = document.getElementById('add-album'),
         artists_list = document.getElementById('artists-list'),
          albums_list = document.getElementById('albums-list');
   artists_list.addEventListener('click', ArtistList.artistDelete, false);
   artists_list.addEventListener('click', ArtistList.toggleArtistInfo, false);
   artists_list.addEventListener('click', Artist.toggleAlbums, false);
   addArtistButton.addEventListener('click', ArtistList.addArtist, false);
   addAlbumButton.addEventListener('click', AlbumList.addAlbum, false);
   albums_list.addEventListener('click', AlbumList.albumDelete, false);
};


