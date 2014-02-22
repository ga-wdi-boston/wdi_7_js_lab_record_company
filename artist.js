var RCApp = {};
RCApp.Artist = function(name, description) {
	if ((arguments[0] === "") || (arguments[1] === "")) {
		alert("Enter both name and description");
		throw new Error("Invalid entry");
	}
	this.name = name;
	this.description = description;
	this.albums = [];
};

RCApp.Album = function(name, artists, year) {
	if (arguments[0] === "") {
		alert("Enter both name and description");
		throw new Error("Invalid entry");
	}
	this.name = name;
	this.artists = artists || [];
	this.year = year;
};

RCApp.Artist.prototype.addAlbums = function(albums) {
	var artist = this;
	for (var i = 0, l = albums.length; i < l; i = i + 1) {
		var album = new RCApp.Album(albums[i], artist);
		RCApp.album_array.push(album);
		this.albums.push(album);
	}
}


Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}
