window.onload = function() {
	var add_artist_button = document.getElementById('new-artist');

	add_artist_button.onclick = function(event) {
		event.preventDefault();
		RCApp.insert_new_artist();
		return false;
	};

};

var RCApp = RCApp || {};

RCApp.insert_new_artist = function() {
	var new_artist_name = document.getElementById('new-artist-name').value,
			new_artist_desc = document.getElementById('new-artist-desc').value,
			artists_div = document.getElementById('artists'),
			new_row = document.createElement('div'),
			new_name = document.createElement('div'),
			new_desc = document.createElement('div');

	// assign classes, id's, and values
	new_row.className = "artist-row";

	new_name.className = "artist-name";
	// new_name.id = "artist-" + NUMBER + "-name";
	new_name.innerHTML = new_artist_name;

	new_desc.className = "artist-desc";
	// new_desc.id = "artist-" + NUMBER + "-desc";
	new_desc.innerHTML = new_artist_desc;

	// add to artist list
	artists_div.appendChild(new_row);
	new_row.appendChild(new_name);
	new_row.appendChild(new_desc);

};

// RCApp.Artist = function() {
// 	this.name = ;
// 	this.desc = document.getElementById('new-artist-desc');
//  };
