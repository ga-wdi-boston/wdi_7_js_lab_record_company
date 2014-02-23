artist_arr = []

Artist = function(name,description){
	if(name.length > 0 && description.length > 0){
		this.name = name;
		this.description = description;
		this.albums = [];
	} else {
		throw new Error('must enter a name and description');
	}
};

Artist.prototype.addAlbumToArtist = function(album) {
	this.albums.push(album);
};




