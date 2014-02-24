window.onload = function(){
	var addArtistButton, addAlbumButton, artistList, albumList, artistSelect;

		addArtistButton = document.getElementById("add-artist-button");
    addArtistButton.addEventListener('click', RCApp.addArtist, false);

    addAlbumButton = document.getElementById("add-album-button");
    addAlbumButton.addEventListener('click', RCApp.addAlbum, false);

		artistList = document.getElementById("artists-list");
		artistList.addEventListener('click', RCApp.deleteItem, false);
		artistList.addEventListener('click', RCApp.toggleDetails, false);

		albumList = document.getElementById("albums-list");
		albumList.addEventListener('click', RCApp.deleteItem, false);
		albumList.addEventListener('click', RCApp.toggleDetails, false);
};