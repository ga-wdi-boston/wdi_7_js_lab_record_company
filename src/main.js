var RCApp = RCApp || {};

window.onload = function(){
  RCApp.addArtistButton = document.getElementById('add-artist'),
   RCApp.addAlbumButton = document.getElementById('add-album'),
     RCApp.artists_list = document.getElementById('artists-list'),
      RCApp.albums_list = document.getElementById('albums-list');

  RCApp.artists_list.addEventListener('click', RCApp.ArtistListArtistDelete, false);
  RCApp.artists_list.addEventListener('click', RCApp.ArtistListToggleArtistInfo, false);
  RCApp.addArtistButton.addEventListener('click', RCApp.ArtistListAddArtist, false);
  RCApp.addAlbumButton.addEventListener('click', RCApp.AlbumListAddAlbum, false);
  RCApp.albums_list.addEventListener('click', RCApp.AlbumListAlbumDelete, false);
  RCApp.albums_list.addEventListener('click', RCApp.AlbumListToggleAlbumInfo, false);
};
