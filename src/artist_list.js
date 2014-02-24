RCApp.ArtistList = {};

RCApp.ArtistList.addArtistHandler = function(event) {
	// add an Artist
	var artistList = document.getElementById("artist-list");
	var artistNameEl = document.getElementById("new-artist-name");
	var artistDescriptionEl =  document.getElementById("new-artist-desc");
	var newArtist = new RCApp.Artist(artistNameEl.value, artistDescriptionEl.value);

	// Add new artist shortHTML to artistList: <ul id-'artist-list'> <li> Artist Name <li> </ul>
	artistList.appendChild(newArtist.getShortHTML());

	var foo = "whatever";
}

