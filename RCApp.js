var RCApp = RCApp || {};

RCApp.artist_array = [];
RCApp.album_array = [];

RCApp.buttonHandler = function(event) {
	event.preventDefault();
	var artist_name = document.getElementById('artist-name').value,
		album_name = document.getElementById('album-name').value,
		artist_description = document.getElementById('artist-description').value,
		album_artists_string = document.getElementById('album-artists').value,
		album_year = document.getElementById('album-year').value,
		album_artists = album_artists_string.split(', ');

	if (event.target.id === 'artist-button') {
		var artist = new RCApp.Artist(artist_name, artist_description);
		RCApp.artist_array.push(artist);
		RCApp.add_artist(artist);
	} else if (event.target.id === 'album-button') {
		//var album = new Album(album_name, album_artists, album_year);
		RCApp.add_album(album_name, album_artists, album_year);
	}
};

RCApp.actionHandler = function(event) {
	event.preventDefault();
	if (event.target.className === 'delete') {
		this.removeChild(event.target.parentNode);
	} else if (event.target.className === 'showmore') {
		if (this.id === 'album-list') {
			var show_element = this.children[0].children[3];
			if (show_element.className === 'hidden') {
			show_element.removeAttribute('class', 'hidden');
			event.target.innerHTML = "Show less";
			return false;
			} else {
				show_element.setAttribute('class', 'hidden');
				event.target.innerHTML = "Show more";
				return false;
			}

		} else {
			var show_element = this.children[0].children[4];
			if (show_element.className === 'hidden') {
			show_element.removeAttribute('class', 'hidden');
			event.target.innerHTML = "Show less";
			return false;
			} else {
				show_element.setAttribute('class', 'hidden');
				event.target.innerHTML = "Show more";
				return false;
			}
		}
	} else if (event.target.className === 'album-submit') {
		// The button to add albums was clicked.
		var album_list = event.target.parentNode.children[0].value,
			artists_albums = event.target.parentNode.parentNode.getElementsByClassName('artist-albums'),
			artist_id_array = event.target.id.split('_'),
			index,
			artist,
			albums;

		index = artist_id_array[artist_id_array.length -1 ];
		artist = RCApp.artist_array[index];
		albums = album_list.split(', ');
		artist.addAlbums(albums);

		artists_albums[0].innerHTML = '';
		//artist.albums = artist.albums.concat(albums);
		for (var j = 0, k = artist.albums.length; j < k; j = j + 1){

			artists_albums[0].innerHTML += "'" + artist.albums[j].name + "'" + ' ';
		}
	}
};

RCApp.add_artist = function(artist) {
	var artist_list = document.getElementById('artist-list'),
		artist_element = document.createElement('div'),
		artist_name = document.createElement('h2'),
		album_form = document.createElement('form'),
		form_input = document.createElement('input'),
		form_button = document.createElement('input'),
		artist_details = document.createElement('div'),
		artist_description = document.createElement('p'),
		artist_albums = document.createElement('p'),
		artist_title = document.createElement('p'),
		artist_button = document.createElement('button'),
		show_more = document.createElement('button'),
		artist_counter;



	// Integer value of the data counter
	artist_counter = parseInt(artist_list.getAttribute('data-counter'));

	// Set the unique id of the artist div to the data-counter value w class artist
	artist_element.setAttribute('id', 'artist_'+artist_counter);
	artist_element.setAttribute('class', 'artist');

	// Set up form to append to artist element
	form_input.setAttribute('id', 'albums_input');
	form_input.setAttribute('class', 'albums_input');
	form_input.setAttribute('type', 'textarea');
	form_input.setAttribute('placeholder', 'Album1, Album2, Album3');
	form_button.setAttribute('id', 'albums_input_button_'+artist_counter);
	form_button.setAttribute('type', 'submit');
	form_button.setAttribute('value', 'Add albums');
	form_button.className = 'album-submit';
	album_form.appendChild(form_input);
	album_form.appendChild(form_button);

	// Set attributes on artist details to initially show as hidden
	artist_details.setAttribute('class', 'hidden artist-details');
	artist_description.innerHTML = artist.description;
	artist_title.innerHTML = 'Albums by ' + artist.name + ": ";
	artist_albums.innerHTML = artist.albums.join(', ');
	artist_title.appendChild(artist_albums);
	artist_albums.className = 'artist-albums';
	artist_details.appendChild(artist_description);
	artist_details.appendChild(artist_title);

	// Set artist button id to data-counter value with text "Delete"
	artist_button.setAttribute('id', 'artist_button_'+artist_counter);
	artist_button.setAttribute('class', 'delete');
	artist_button.innerHTML = "Delete";

	show_more.innerHTML = 'Show more';
	show_more.className = 'showmore';

	// Increment the data-counter attribute on the artist list
	artist_counter = artist_counter + 1;
	artist_list.setAttribute('data-counter', artist_counter);

	artist_name.innerHTML = artist.name;
	artist_element.appendChild(artist_name);
	artist_element.appendChild(album_form);
	artist_element.appendChild(album_form);
	artist_element.appendChild(show_more);
	artist_element.appendChild(artist_button);
	artist_list.appendChild(artist_element);
	artist_element.appendChild(artist_details);



};

RCApp.create_album = function(album) {
	var album_list = document.getElementById('album-list'),
		album_element = document.createElement('div'),
		album_name = document.createElement('h2'),
		album_details = document.createElement('div'),
		album_artists = document.createElement('p'),
		album_artists_title = document.createElement('p'),
		album_title = document.createElement('p'),
		album_button = document.createElement('button'),
		show_more = document.createElement('button'),
		album_counter;

		// Integer value of the data counter
		album_counter = parseInt(album_list.getAttribute('data-counter'));

		// Set the unique id of the album div to the data-counter value w class album
		album_element.setAttribute('id', 'album_'+album_counter);
		album_element.setAttribute('class', 'album');



		// Set attributes on album details to initially show as hidden
		album_details.setAttribute('class', 'hidden album-details');
		album_artists.innerHTML = album.artists.join(', ');
		album_artists_title.innerHTML = 'Artists features in ' + album.name + ": ";
		album_artists.innerHTML = album.artists.join(', ');
		album_artists_title.appendChild(album_artists);
		album_artists.className = 'album_artists';
		album_details.appendChild(album_artists_title);
		//album_details.appendChild(album_albums);

		// Set album button id to data-counter value with text "Delete"
		album_button.setAttribute('id', 'album_button_'+album_counter);
		album_button.setAttribute('class', 'delete');
		album_button.innerHTML = "Delete";

		show_more.innerHTML = 'Show more';
		show_more.className = 'showmore';


		album_counter = album_counter + 1;

		// Increment the data-counter attribute on the album list
		album_counter = album_counter + 1;
		album_list.setAttribute('data-counter', album_counter);

		album_name.innerHTML = album.name;
		album_element.appendChild(album_name);
		album_element.appendChild(show_more);
		album_element.appendChild(album_button);
		album_list.appendChild(album_element);
		album_element.appendChild(album_details);

};

RCApp.add_album = function(album_name, album_artists, album_year) {
	var new_album = new RCApp.Album(album_name, album_artists, album_year),
		names = [];

		for(var artist in RCApp.artist_array) {
			names.push(artist.name);
		}


		// Iterate through artists on the album
		for (var i = 0, l = album_artists.length; i < l; i++){
			var current_artist = album_artists[i];
			// If the artist is already in the artist array
			if (names.contains(current_artist)) {
				// Find the index of the artist in the artist array
				var index = names.indexOf(current_artist),
					saved_artist,
					saved_artist_albums,
					saved_album_names;

				// Get the saved artist and their album array
				saved_artist = RCApp.artist_array[index];
				saved_artist_albums = saved_artist.albums;
				saved_album_names = saved_artist_albums.map(currentValue.name)

				// If the artist is not already on the album
				if (!saved_album_names.contains(album_name)) {
					// Add the new album to the artists list.
					saved_artist.albums.push(new_album);
				}
			} else {
				// If the artist doesn't exist yet created it and add album
				var new_artist = new RCApp.Artist(current_artist);
				new_artist.albums.push(new_album);
			}
		}

		RCApp.create_album(new_album);


	// // Iterate through list of current artists
	// for (var i = 0, l = RCApp.artist_array.length; i < l; i++) {
	// 	var saved_artist = RCApp.artist_array[i];


	// 	// Iterate through artists on the album
	// 	for (var j = 0, k = artists_array.length; j < k; j++){
	// 		var current_artist = artists_array[j];
	// 		// If the album's artist is already saved
	// 		if (saved_artist.name === current_artist.name) {
	// 			// Iterate through the saved artist's list of albums
	// 			for (var y = 0, q = saved_artist.albums.length; y < q; y++){
	// 				var saved_artist_album = saved_artist.albums[y];
	// 				// If the album is in the artist's list of albums
	// 				if (saved_artist_album.name === album_name) {
	// 					// Update the album year
	// 					saved_artist_album.year = album_year;
	// 				}
	// 			}
	// 			// Artist is saved but is not on the album
	// 			// Create new album and add it to the artists albums
	// 			saved_artist.albums.push(new_album);
	// 		}
	// 	}


	// }

	// var album_list = document.getElementById('album-list'),
	// 	album_element = document.createElement('li'),
	// 	album_button = document.createElement('button'),
	// 	album_counter;

	// album_counter = parseInt(album_list.getAttribute('data-counter'));
	// album_element.setAttribute('id', 'album_'+album_counter);
	// album_button.setAttribute('id', 'album_button_'+album_counter);
	// album_button.innerHTML = "Delete";

	// album_counter = album_counter + 1;
	// album_list.setAttribute('data-counter', album_counter);

	// album_element.innerHTML = album.name;
	// album_element.appendChild(album_button);
	// album_list.appendChild(album_element);

};

// RCApp.removeItem = function(event) {
// 	event.preventDefault();
// 	this.removeChild(event.target.parentNode);
// };

// RCApp.showMore = function(event) {
//  	event.preventDefault();
//  	var div = this.getElementsByClassName('artist-details');
//  	if (div.className === 'hidden') {
//  		div.removeAttribute('class', 'hidden');
//  	} else {
//  		div.setAttribute('class', 'hidden');
//  	}

// };
