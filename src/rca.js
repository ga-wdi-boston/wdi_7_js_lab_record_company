window.onload = function() {

		RCA.artists = document.getElementById('artist-list');
		RCA.add_artist = document.getElementById('new-artist-button');
		RCA.add_artist.onclick = function(event) {
			event.preventDefault();
			RCA.add_artist_to_list(RCA.artists);
			return false;
	}
}

var RCA = {

		add_artist_to_list: function(list) {
			var new_artist = document.createElement('li');
				  new_artist = new_artist.setAttribute('button', 'Delete')
					new_artist_name = document.getElementById('new-artist-name');
					new_artist_description = document.getElementById('new-artist-description');
					new_artist_name.innerHTML = new_artist_name.value + " | " + new_artist_description.value;
					// new_artist_description.innerHTML = new_artist_description.value,
					if(new_artist_name.innerHTML !=="") {
						list.appendChild(new_artist_name.innerHTML);
					};
						return true;
		},
					// if(new_artist_description_innerHTML !="") {
					// 	list.appendChild(new_artist_description_innerHTML);
					// };
					// 	return true;

			add_album_to_list: function(list) {
			var new_album = document.createElement('li');
				  new_album = new_album.setAttribute('button', 'Delete')
					new_album_name = document.getElementById('new-album-name');
					new_album_artist = document.getElementById('new-album-artist');
					new_album_year = document.getElementById('new-album-year');
					new_album_name.innerHTML = new_album_name.value + " | " + new_album_artist.value + " | " new_album_year.value;
					if(new_album_name.innerHTML !=="") {
						list.appendChild(new_artist_name.innerHTML);
					};
						return true;

		}
}