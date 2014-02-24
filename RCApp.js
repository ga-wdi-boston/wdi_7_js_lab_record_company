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
		var id = parseInt(document.getElementById('artist-list').getAttribute('data-counter')),
			artist;

		artist = new RCApp.Artist(artist_name, artist_description, id);
		RCApp.artist_array.push(artist);
		id = id + 1;
		document.getElementById('artist-list').setAttribute('data-counter', id);
		//RCApp.add_artist(artist);
		RCApp.render_albums();
		RCApp.render_artists();
	} else if (event.target.id === 'album-button') {
		//var album = new Album(album_name, album_artists, album_year);
		var id = parseInt(document.getElementById('album-list').getAttribute('data-counter')),
		album;

		album = new RCApp.Album(album_name, album_artists, album_year, id);
		id = id + 1;
		document.getElementById('album-list').setAttribute('data-counter', id);
		RCApp.add_album(album, id);
		RCApp.render_artists();
	}
};

RCApp.actionHandler = function(event) {
	event.preventDefault();
	if (event.target.className === 'delete btn btn-danger') {
		this.removeChild(event.target.parentNode);
	} else if (event.target.className === 'showmore btn btn-info') {
		if (this.id === 'album-list') {
			var show_element = event.target.parentNode.getElementsByClassName('album-details');
			if (show_element[0].className.indexOf('hidden') !== -1) {
			show_element[0].setAttribute('class', 'album-details');
			event.target.innerHTML = "Show less";
			return false;
			} else {
				show_element[0].setAttribute('class', 'hidden album-details');
				event.target.innerHTML = "Show more";
				return false;
			}

		} else {
			var show_element = event.target.parentNode.getElementsByClassName('artist-details');
			if (show_element[0].className.indexOf('hidden') !== -1) {
				show_element[0].setAttribute('class', 'artist-details');
				//show_element[0].removeAttribute('class', 'hidden');
				event.target.innerHTML = "Show less";
				return false;
			} else {
				show_element[0].setAttribute('class', 'hidden artist-details');
				event.target.innerHTML = "Show more";
				return false;
			}
		}
	} else if (event.target.className === 'btn btn-info album-submit') {
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
		//artist.addAlbums(albums);


		for (var y = 0, z = albums.length; y < z; y++) {
			// Add albums to the albums array if they don't already exist
			var new_album = new RCApp.Album(albums[y]),
				artist_album_names = [],
				album_names = [];

			for (var i = 0, l = RCApp.album_array.length; i < l; i++) {
				album_names.push(RCApp.album_array[0].name);
			}

			if (!album_names.contains(new_album.name)) {
				RCApp.album_array.push(new_album);
			}



			// Add albums to the artists list of albums if it doesn't already exist
			for (var j = 0, k = artist.albums.length; i < l; i++) {
				artist_album_names.push(artist.albums[0].name);
			}

			if (!artist_album_names.contains(new_album.name)){
				artist.albums.push(new_album);
			}
		}

		artists_albums[0].innerHTML = '';
		for (var j = 0, k = artist.albums.length; j < k; j = j + 1){
			artists_albums[0].innerHTML += "'" + artist.albums[j].name + "'" + ' ';
		}

		RCApp.render_albums();
	}
};

RCApp.add_album = function(album) {
	var names = [];

		for(var artist in RCApp.artist_array) {
			names.push(RCApp.artist_array[artist].name);
		}


		// Iterate through artists on the album
		for (var i = 0, l = album.artists.length; i < l; i++){
			var current_artist = album.artists[i];
			// If the artist is already in the artist array
			if (names.contains(current_artist)) {
				// Find the index of the artist in the artist array
				var index = names.indexOf(current_artist),
					saved_artist,
					saved_artist_albums,
					saved_album_names = [];

				// Get the saved artist and their album array
				saved_artist = RCApp.artist_array[index];
				saved_artist_albums = saved_artist.albums;

				if (saved_artist_albums > 0) {
					for(var j = 0, k = saved_artist_albums.length; j < k; j++) {
						saved_album_names.push(saved_artist_albums[i].name);
					}
				}

				// If the artist is not already on the album
				if (!saved_album_names.contains(album.name)) {
					// Add the new album to the artists list.
					saved_artist.albums.push(album);

					//RCApp.album_array.push(album);
				}
			} else {
				// If the artist doesn't exist yet created it and add album
				var id = parseInt(document.getElementById('album-list').getAttribute('data-counter')),
					new_artist = new RCApp.Artist(current_artist);

				new_artist.id = id;
				document.getElementById('album-list').setAttribute('data-counter', id+1);
				new_artist.albums.push(album);
				RCApp.artist_array.push(new_artist);
				//RCApp.album_array.push(album);
			}

		}
		RCApp.album_array.push(album);
		RCApp.render_albums();
		RCApp.render_artists();

};

RCApp.render_artists = function() {
	var artist_list = document.getElementById('artist-list');


	artist_list.innerHTML = '';

	for (var i = 0, l = RCApp.artist_array.length; i < l; i++) {
		var artist_element = document.createElement('div'),
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
			artist_counter,
			artist;

		artist = RCApp.artist_array[i];

		// Set the unique id of the artist div to the data-counter value w class artist
		artist_element.setAttribute('id', 'artist_'+artist.id);
		artist_element.setAttribute('class', 'item');

		// Set up form to append to artist element
		album_form.className = 'form-inline';
		form_input.setAttribute('id', 'albums_input form-control');
		form_input.setAttribute('class', 'albums_input');
		form_input.setAttribute('type', 'textarea');
		form_input.setAttribute('placeholder', 'Album1, Album2, Album3');
		form_button.setAttribute('id', 'albums_input_button_'+artist.id);
		form_button.setAttribute('type', 'submit');
		form_button.setAttribute('value', 'Add albums');
		form_button.setAttribute('class', 'btn btn-info album-submit');
		//form_button.className = 'album-submit';
		album_form.appendChild(form_input);
		album_form.appendChild(form_button);

		// Set attributes on artist details to initially show as hidden
		artist_details.setAttribute('class', 'hidden artist-details');

		// Display the artist description if one has been provided
		if (artist.description !== undefined) {
			artist_description.innerHTML = artist.description;
			artist_description.className = 'lead';
		} else {
			artist_description.innerHTML = "";
		}

		artist_title.innerHTML = 'Albums by ' + artist.name + ": ";
		// Display the artists album names
		for (var j = 0, k = artist.albums.length; j < k; j++) {
			artist_albums.innerHTML += "'" + artist.albums[j].name + "'" + ' ';
		}

		artist_title.appendChild(artist_albums);
		artist_title.className = 'lead';
		artist_albums.className = 'artist-albums';
		artist_details.appendChild(artist_description);
		artist_details.appendChild(artist_title);

		// Set artist button id to data-counter value with text "Delete"
		artist_button.setAttribute('id', 'artist_button_'+artist.id);
		artist_button.setAttribute('class', 'delete btn btn-danger');
		artist_button.innerHTML = "Delete";

		show_more.innerHTML = 'Show more';
		show_more.setAttribute('class', 'showmore btn btn-info');

		// Increment the data-counter attribute on the artist list
		artist_counter = artist.id + 1;
		artist_list.setAttribute('data-counter', artist_counter);

		artist_name.innerHTML = artist.name;
		artist_element.appendChild(artist_name);
		artist_element.appendChild(album_form);
		artist_element.appendChild(album_form);
		artist_element.appendChild(show_more);
		artist_element.appendChild(artist_button);
		artist_list.appendChild(artist_element);
		artist_element.appendChild(artist_details);

	}
};

RCApp.render_albums = function() {
	var album_list = document.getElementById('album-list');
		// Clear the contents of the album list
		album_list.innerHTML = '';

	for (var i = 0, l = RCApp.album_array.length; i < l; i++) {
		var album_element = document.createElement('div'),
			album_name = document.createElement('h2'),
			album_details = document.createElement('div'),
			album_artists = document.createElement('p'),
			album_artists_title = document.createElement('p'),
			album_title = document.createElement('p'),
			album_button = document.createElement('button'),
			show_more = document.createElement('button'),
			album_counter,
			album = RCApp.album_array[i];

		// Set attributes on album details to initially show as hidden
		album_details.setAttribute('class', 'hidden album-details');
		album_element.className = 'item'

		for (var j = 0, k = album.artists.length; j < k; j++) {
			album_artists.innerHTML += album.artists[j] + ' ';
		}
		album_artists_title.innerHTML = 'Artists featured in ' + album.name + ": ";
		album_artists_title.appendChild(album_artists);
		album_artists_title.className = 'lead';
		album_artists.className = 'lead';
		album_artists.className = 'album_artists';
		album_details.appendChild(album_artists_title);
		//album_details.appendChild(album_albums);

		// Set album button id to data-counter value with text "Delete"
		album_button.setAttribute('id', 'album_button_'+album.id);
		album_button.setAttribute('class', 'delete btn btn-danger');
		album_button.innerHTML = "Delete";

		show_more.innerHTML = 'Show more';
		show_more.setAttribute('class', 'showmore btn btn-info');

		// Increment the data-counter attribute on the album list
		album_counter = album.id + 1;
		album_list.setAttribute('data-counter', album_counter);

		album_name.innerHTML = album.name;
		album_element.appendChild(album_name);
		album_element.appendChild(show_more);
		album_element.appendChild(album_button);
		album_list.appendChild(album_element);
		album_element.appendChild(album_details);
	}
};

