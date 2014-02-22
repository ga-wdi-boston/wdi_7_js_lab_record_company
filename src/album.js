var Album = function(name, band, year){
	this.name = name;
	this.band = band;
	this.year = year;
	// this.description = description;
	this.artists = [];
	this.id = 'album_' + RCApp.album_counter;
};

Album.prototype = {

	showButton: function(){
		var showButton;
		showButton = document.createElement('button');
		showButton.innerHTML = 'Show';
		return showButton;
	},

	nameField: function(){
		var h3 = document.createElement('h3');
		h3.innerHTML = this.name;
		return h3;
	},

	renderMe: function(){
		var new_li;
		new_li = document.createElement('li');
		new_li.appendChild(this.nameField());
		return new_li;
	}

};

