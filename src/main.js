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
	var new_artist = new RCApp.Artist(),
			new_artist_name = new_artist.name.value,
			new_artist_desc = new_artist.desc.value,
			artists_div = document.getElementById('artists'),
			new_row = document.createElement('div'),
			new_name = document.createElement('div'),
			new_desc = document.createElement('div'),
			new_show_button = document.createElement('button'),
			new_delete_button = document.createElement('button'),
			number = RCApp.Artist.number();

	// assign classes, id's, and values
	new_row.className = "artist-row";
	new_row.setAttribute('data-counter', number);

	new_name.className = "artist-name";
	new_name.id = "artist-" + number + "-name";
	new_name.innerHTML = new_artist_name;

	new_desc.className = "artist-desc";
	new_desc.id = "artist-" + number + "-desc";
	new_desc.innerHTML = new_artist_desc;
	new_desc.style.display = "none";

	new_show_button.className = "artist-show";
	new_show_button.id = "artist-" + number + "-show";
	new_show_button.setAttribute('type', "button");
	new_show_button.innerHTML = "show";
	new_show_button.addEventListener('click', RCApp.show_artist, false);

	new_delete_button.className = "artist-delete";
	new_delete_button.id = "artist-" + number + "-delete";
	new_delete_button.setAttribute('type', "button");
	new_delete_button.innerHTML = "delete";
	new_delete_button.addEventListener('click', RCApp.delete_artist, false);

	// add to artist list
	artists_div.appendChild(new_row);
	new_row.appendChild(new_name);
	new_row.appendChild(new_desc);
	new_row.appendChild(new_show_button);
	new_row.appendChild(new_delete_button);

	// reset textbox
	new_artist.name.value = "";
	new_artist.desc.value = "";
	return false;

};

RCApp.Artist = function() {
	this.name = document.getElementById('new-artist-name');
	this.desc = document.getElementById('new-artist-desc');
};

RCApp.Artist.number = (function(){
  var i = 0;
  return function(){
    i = i + 1;
    return i;
  };
})();

RCApp.delete_artist = function(event) {
	event.target.parentNode.parentNode.removeChild(event.target.parentNode);
};

RCApp.show_artist = function(event) {
	event.target.previousSibling.style.display = "inline-block";
	event.target.style.display = "none";
}
