var RCApp = RCApp || {};

RCApp.addArtist = function(event){
	var artist = document.createElement('li'), 
			input = document.getElementById("input-text"),
			input_desp = document.getElementById("input-desp"),
			artist_input = document.createElement("input"),
			artist_desp = document.createElement("p"),
			artist_button = document.createElement('button'), 
			artist_button2 = document.createElement('button'),
			artist_button3 = document.createElement('button'),
			list = document.getElementById('artist-list'),
			artist_counter;
  //album.setAttribute('id', 'artist_'+artist_counter);

	artist_counter = parseInt(list.getAttribute('data-artistcounter'));
	artist.setAttribute('id', 'artist_'+artist_counter);
	artist_button.setAttribute('id', 'artist_button_'+artist_counter);
	artist_button2.setAttribute('id', 'artist_button2_'+artist_counter);
	artist_button3.setAttribute('id', 'artist_button3_'+artist_counter);
	artist_desp.setAttribute('id', 'artist_desp_'+artist_counter);
	artist_input.setAttribute('id', 'artist_input_'+artist_counter);
	artist_input.setAttribute('type', 'text');
	artist_counter += 1;
	artist.innerText = "Artist: " + input.value;
	artist_button.innerText = 'Delete';
	artist_button2.innerText = 'Add Album';
	artist_button3.innerText = 'Show Description';
	artist_desp.innerText = "Description:" + input_desp.value;
	list.setAttribute('data-artistcounter', artist_counter);
	artist.appendChild(artist_button3);
	artist.appendChild(artist_desp);
	artist.appendChild(artist_input);
	artist.appendChild(artist_button);
	artist.appendChild(artist_button2);
	list.appendChild(artist);
	input.value = '';
	input_desp.value = "";
	artist_button.style.visibility = 'hidden';
	artist_button2.style.visibility = 'hidden';
	artist_input.style.visibility = 'hidden';
	artist_desp.style.visibility = 'hidden';
};

RCApp.artistAddAlbum = function(event){
	var	artist_array = event.target.id.split('_'),
			album = document.createElement('li'),
		  list = document.getElementById('album-list'),
		  list2 = document.getElementById('artist-list'),
		  album_button = document.createElement('button'), 
		  album_counter = parseInt(list.getAttribute('data-counter')),
		  id,artist_input,artist_counter;
	id = artist_array[artist_array.length - 1];
	album_button.setAttribute('id', 'album_button_'+album_counter);
	album_button.innerText = 'Delete';
  artist_input = document.getElementById('artist_input_' + id);
  artist_counter = parseInt(list2.getAttribute('data-artistcounter'));
  album.setAttribute('id', 'album_'+album_counter);
  album.innerText = "Album: " + artist_input.value + '  ' + "\n" + "Band: " + this.children[parseInt(id)].innerHTML.split("<")[0].split("Artist:")[1];
	album.appendChild(album_button);
	if("artist_button2_" + event.target.id.charAt(event.target.id.length - 1) === event.target.id){
		list.appendChild(album);
		album_counter += 1;
		artist_input.value = '';
	}
};



RCApp.artistDelete = function(event){
	var artist_array = event.target.id.split('_'),
		  list = document.getElementById('artist-list'),
		  id,artist,artist_button,artist_button2,artist_input,artist_button3,artist_desp;
  id = artist_array[artist_array.length - 1];
  artist = document.getElementById('artist_' + id);
  artist_button = document.getElementById('artist_button_' + id);
	artist_button2 = document.getElementById('artist_button2_' + id);
	artist_button3 = document.getElementById('artist_button3_' + id);
	artist_input = document.getElementById('artist_input_' + id);
	artist_desp = document.getElementById('artist_desp_' + id);
	if("artist_button_" + event.target.id.charAt(event.target.id.length - 1) === event.target.id){
		list.removeChild(artist);
	} else if("artist_button3_" + event.target.id.charAt(event.target.id.length - 1) === event.target.id){
			if(artist_button.style.visibility === 'hidden'){
				artist_button.style.visibility = 'visible';
				artist_button2.style.visibility = 'visible';
				artist_input.style.visibility = 'visible';
				artist_desp.style.visibility = 'visible';
				artist_button3.innerText = "Unshow It";
			// artist.innerHTML = artist.innerHTML.split("Description")[0]
			}else{
				artist_button.style.visibility = 'hidden';
				artist_button2.style.visibility = 'hidden';
				artist_input.style.visibility = 'hidden';
				artist_desp.style.visibility = 'hidden';
				artist_button3.innerText = "Show It";
			}
		// artist.innerHTML = artist.innerHTML.split("Description")[0]
	}
};

RCApp.addAlbum = function(event){
	var album = document.createElement('li'), 
			input = document.getElementById("input-text2"),
			input_band = document.getElementById("input-band"),
			input_year = document.getElementById("input-year"),
			album_button = document.createElement('button'), 
			list = document.getElementById('album-list'),
			album_counter;
  //album.setAttribute('id', 'album_'+album_counter);

	album_counter = parseInt(list.getAttribute('data-counter'));
	album.setAttribute('id', 'album_'+album_counter);
	album_button.setAttribute('id', 'album_button_'+album_counter);
	album_counter += 1;
	album.innerText = "Album: " + input.value + '  ' + "\n" + "Band: " + input_band.value + "\n" + "Year: " + input_year.value;
	album_button.innerText = 'Delete';
	list.setAttribute('data-counter', album_counter);
	album.appendChild(album_button);
	list.appendChild(album);
	input.value = '';
	input_band.value = "";
	input_year.value = "";
};

RCApp.albumDelete = function(event){
  var album_array = event.target.id.split('_'),
	  	list = document.getElementById('album-list'),
	  	id,album;
	id = album_array[album_array.length - 1];
	album = document.getElementById('album_' + id);
	if("album_button_" + event.target.id.charAt(event.target.id.length - 1) === event.target.id){
		list.removeChild(album);
	}
};
