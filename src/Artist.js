artist_arr = []

Artist = function(name,description){
	if(name.length > 0 && description.length > 0){
		this.name = name;
		this.description = description;
		this.albums = [];
	} else {
		throw new Error('must enter a name and description');
	}
};

Artist.prototype.addAlbumToArtist = function(album) {
	this.albums.push(album);
};

Artist.toggleAlbums = function(event){
	var target = event.target, list, artist_list_array,id, artist_element_toggle, artist_object, li, ul;
	if(target.nodeName !== "BUTTON" || target.className === "delete" || target.className === "show") {
	  return;
	}
	list = document.getElementById('artists-list');
	artist_list_array = event.target.id.split('_');
	id = artist_list_array[artist_list_array.length - 1];
	artist_object = artist_arr[id];
	artist_element_toggle = event.target.parentNode;
	ul = document.createElement("ul");
	artist_element_toggle.appendChild(ul)

	// for (var i = 0; i < artist_object.albums.length; i++) {
 //    li = document.createElement("li");
	//   li.textContent = artist_object.albums.name;
	//   ul.appendChild(li);
	// }
};



