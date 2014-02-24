var RCApp = RCApp || {};

RCApp.artist_arr = []

// new Artist(name, desc)
RCApp.Artist = function(name,description){
	if(name.length > 0 && description.length > 0){
		this.name = name;
		this.description = description;
		this.albums = [];
	} else {
		throw new Error('must enter a name and description');
	}
};

RCApp.Artist.prototype.addAlbumToArtist = function(album) {
	this.albums.push(album);
	// Update the DOM of the Artist's Album List
	RCApp.ArtistListUpdateArtistAlbumsList(this, album);
};





