window.onload = function(){
	// renderLists();

};

RCApp = {};

RCApp.artists = [];
RCApp.albums = [];
RCApp.artist_counter = RCApp.artists.length;
RCApp.album_counter = RCApp.albums.length;

RCApp.addArtist = function(event){
	var artist, name_field, desc_field;
	name_field = document.getElementById("add-artist-name");
	desc_field = document.getElementById("add-artist-desc");
	artist = new Artist(name_field.value, desc_field.value);
	name_field.value = '';
	desc_field.value = '';
	RCApp.artists.push(artist);
	RCApp.updateCounters();
	RCApp.renderList('artists-list', RCApp.artists);
};

RCApp.addAlbum = function(event){
	var album, name_field, band_field, year_field;
	name_field = document.getElementById("add-album-name");
	band_field = document.getElementById("add-album-band");
	year_field = document.getElementById("add-album-year");

	album = new Album(name_field.value, band_field.value, year_field.value);
	name_field.value = '';
	band_field.value = '';
	year_field.value = '';

	RCApp.albums.push(album);
	RCApp.updateCounters();
	RCApp.renderList('albums-list', RCApp.albums);
};

RCApp.updateCounters = function(){
	RCApp.artist_counter = RCApp.artists.length;
	RCApp.album_counter = RCApp.albums.length;
};

RCApp.renderList = function(list, array){
	var i, length;
	i = 0;
	length = array.length;

	list = document.getElementById(list)
	list.innerHTML = ''

	for(;i < length;){
		list.appendChild(array[i].renderMe());
		i = i + 1;
	};

};

