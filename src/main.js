var RCApp = RCApp || {};

window.onload = function() {
	var add_artist_button = document.getElementById('new-artist'),
			add_album_button = document.getElementById('new-album');

	add_artist_button.onclick = function(event) {
		event.preventDefault();
		RCApp.insert_new_artist();
		return false;
	};

	add_album_button.onclick = function(event) {
		event.preventDefault();
		RCApp.insert_new_album();
		return false;
	};

};




