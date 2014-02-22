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
	RCApp.renderList('artists-list');
};

RCApp.updateCounters = function(){
	RCApp.artist_counter = RCApp.artists.length;
	RCApp.album_counter = RCApp.albums.length;
};

RCApp.addAlbum = function(albumElement){
	RCApp.albums.push(albumElement);
};

RCApp.renderList = function(list){
	var i, length;
	i = 0;
	length = RCApp.artist_counter
	list = document.getElementById(list)
	list.innerHTML = ''

	for(;i < length;){
		list.appendChild(RCApp.artists[i].renderMe());
		i = i + 1;
	};

};

