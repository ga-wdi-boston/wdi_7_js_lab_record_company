window.onload = function(){

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

	artist = new RCApp.artistContent.Artist(name_field.value, desc_field.value);
	name_field.value = '';
	desc_field.value = '';

	RCApp.artists.push(artist);
	RCApp.populateArtists();
	RCApp.updateCounters();
	RCApp.renderList('artists-list', RCApp.artists);
};

RCApp.addAlbum = function(event){
	var album, name_field, artist_field, year_field;
	name_field = document.getElementById("add-album-name");
	artist_field = document.getElementById("add-album-artist");
	year_field = document.getElementById("add-album-year");

	album = new RCApp.albumContent.Album(name_field.value, year_field.value, artist_field.value);

	RCApp.albums.push(album);
	RCApp.addAlbumToArtist(name_field.value, artist_field.value)
	RCApp.updateCounters();
	name_field.value = '';
	year_field.value = '';
	RCApp.renderList('albums-list', RCApp.albums);
	RCApp.renderList('artists-list', RCApp.artists);
};

RCApp.addAlbumToArtist = function(album_name, artist_name){
	var i, length, artist;
	i = 0;
	length = RCApp.artists.length;

	for(;i < length;){
		if(RCApp.artists[i].name === artist_name){
			artist = RCApp.artists[i];
		}
		i = i + 1;
	};

	artist.albums.push(album_name);

};

RCApp.deleteItem = function(event){
	if(event.target.className === 'delete-button btn button-default'){
		var item, item_type, item_id;
		item_id = event.target.parentNode.id;
		item_type = item_id.split('_')[0]

		if(item_type === 'artist'){
			RCApp.deleteFromArray('id', item_id, RCApp.artists);
			RCApp.renderList('artists-list', RCApp.artists);
		} else {
			RCApp.deleteFromArray('id', item_id, RCApp.albums);
			RCApp.renderList('albums-list', RCApp.albums);
		};
	};
};

RCApp.populateArtists = function(){
	var list, i, length, option;
	list = document.getElementById('add-album-artist');
	list.innerHTML = '';

	i = 0;
	length = RCApp.artists.length;

	for(;i < length;){
		option = document.createElement('option');
		option.innerHTML = RCApp.artists[i].name;
		list.appendChild(option);
		i = i + 1;
	};
};

RCApp.populateAlbums = function(select_list){
	var i, option;
	select_list.innerHTML = '';

	i = 0;
	length = RCApp.albums.length;

	for(;i < length;){
		option = document.createElement('option');
		option.innerHTML = RCApp.albums[i].name;
		select_list.appendChild(option);
		i = i + 1;
	};
};

RCApp.deleteFromArray = function(field, value, array){
	var i, length;
	i = 0;
	length = array.length;
	for(;i < length;){
		if(array[i][field] === value){
			array.splice(i);
		};
		i = i + 1;
	};

};

RCApp.toggleDetails = function(){
	if(event.target.className === 'show-button btn button-default'){
		var button, details_div;
		button = event.target;
		details_div = button.parentNode.querySelector('div');

		if(details_div.className === 'hide details'){
			details_div.className = 'show details';
			button.innerHTML = 'Hide details';
		} else {
			details_div.className = 'hide details';
			button.innerHTML = 'Show details';
		};
	};

};

RCApp.updateCounters = function(){
	RCApp.artist_counter = RCApp.artists.length;
	RCApp.album_counter = RCApp.albums.length;
};

RCApp.renderList = function(list, array){
	var i, length;
	i = 0;
	length = array.length;

	list = document.getElementById(list);
	list.innerHTML = '';

	for(;i < length;){
		list.appendChild(array[i].renderMe());
		i = i + 1;
	};

};

