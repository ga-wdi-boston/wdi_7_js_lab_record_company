var RCApp = {};

RCApp.Album = function(name, artists, year) {
	if (arguments[0] === "") {
		alert("Enter both name and description");
		throw new Error("Invalid entry");
	}
	this.name = name;
	this.artists = artists || [];
	this.year = year;
};
