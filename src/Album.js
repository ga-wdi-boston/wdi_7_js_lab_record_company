var RCApp = RCApp || {};

RCApp.album_arr = []

//Album with a name, band name, and year released
RCApp.Album = function(name,band_index, release_year){
	if(name.length > 0 && band_index.length > 0){
		this.name = name;
		this.band_index = band_index;
		this.release_year = release_year;
	} else {
		throw new Error('must enter a name and band_index');
	}
};



