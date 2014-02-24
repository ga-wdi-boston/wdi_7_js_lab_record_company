RCApp.Album = function() {
	this.name = document.getElementById('new-album-name');
	this.band = document.getElementById('new-album-band');
	this.year = document.getElementById('new-album-year');
};

RCApp.Album.number = (function(){
  var i = 0;
  return function(){
    i = i + 1;
    return i;
  };
})();

RCApp.insert_new_album = function() {
	var new_album = new RCApp.Album(),
			new_album_name = new_album.name.value,
			new_album_band = new_album.band.value,
			new_album_year = new_album.year.value,
			albums_div = document.getElementById('albums'),
			new_row = document.createElement('div'),
			new_name = document.createElement('div'),
			new_band = document.createElement('div'),
			new_year = document.createElement('div'),
			new_show_button = document.createElement('button'),
			new_hide_button = document.createElement('button'),
			new_delete_button = document.createElement('button'),
			number = RCApp.Album.number();

	// assign classes, id's, and values
	new_row.className = "album-row";
	new_row.setAttribute('data-counter', number);

	new_name.className = "album-name";
	new_name.id = "album-" + number + "-name";
	new_name.innerHTML = new_album_name;

	new_band.className = "album-band";
	new_band.id = "album-" + number + "-band";
	new_band.innerHTML = new_album_band;
	new_band.style.display = "none";

	new_year.className = "album-year";
	new_year.id = "album-" + number + "-year";
	new_year.innerHTML = new_album_year;
	new_year.style.display = "none";

	new_show_button.className = "album-show";
	new_show_button.id = "album-" + number + "-show";
	new_show_button.setAttribute('type', "button");
	new_show_button.innerHTML = "show";
	new_show_button.addEventListener('click', RCApp.show_album, false);

	new_hide_button.className = "album-hide";
	new_hide_button.id = "album-" + number + "-hide";
	new_hide_button.setAttribute('type', "button");
	new_hide_button.innerHTML = "hide";
	new_hide_button.addEventListener('click', RCApp.hide_album, false);
	new_hide_button.style.display = "none";

	new_delete_button.className = "album-delete";
	new_delete_button.id = "album-" + number + "-delete";
	new_delete_button.setAttribute('type', "button");
	new_delete_button.innerHTML = "delete";
	new_delete_button.addEventListener('click', RCApp.delete_album, false);

	// add to album list
	albums_div.appendChild(new_row);
	new_row.appendChild(new_name);
	new_row.appendChild(new_band);
	new_row.appendChild(new_year);
	new_row.appendChild(new_show_button);
	new_row.appendChild(new_hide_button);
	new_row.appendChild(new_delete_button);

	// reset textbox
	new_album.name.value = "";
	new_album.band.value = "";
	new_album.year.value = "";
	return false;

};

RCApp.delete_album = function(event) {
	event.target.parentNode.parentNode.removeChild(event.target.parentNode);
};

RCApp.show_album = function(event) {
	event.target.previousSibling.style.display = "inline-block"; // show year
	event.target.previousSibling.previousSibling.style.display = "inline-block"; // show band
	event.target.nextSibling.style.display = "inline-block"; // show hide button
	event.target.style.display = "none"; // hide show button
}

RCApp.hide_album = function(event) {
	event.target.previousSibling.style.display = "inline-block"; // show show button
	event.target.previousSibling.previousSibling.style.display = "none"; // show year
	event.target.previousSibling.previousSibling.previousSibling.style.display = "none"; // show band
	event.target.style.display = "none"; // hide hide button
};
