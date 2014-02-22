var Artist = function(name, description){
	this.name = name;
	this.description = description;
	this.albums = [];
	this.id = 'artist_' + RCApp.artist_counter;
};

Artist.prototype = {

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



