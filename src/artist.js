var Artist = function(name, description){
	this.name = name;
	this.description = description;
	this.albums = [];
	this.id = 'artist_' + RCApp.artist_counter;
};

Artist.prototype = {

	makeButton: function(type){
		var button;
		button = document.createElement('button');
		button.innerHTML = type.toUpperCase();
		if(type === 'delete'){
			button.className = 'delete-button';
		} else {
			button.className = 'show-button';
		}
		return button;
	},

	nameField: function(){
		var h3 = document.createElement('h3');
		h3.innerHTML = this.name;
		return h3;
	},

	renderMe: function(){
		var new_li;
		new_li = document.createElement('li');
		new_li.className = this.id;
		new_li.appendChild(this.nameField());
		new_li.appendChild(this.makeButton('delete'));
		new_li.appendChild(this.makeButton('show'));
		return new_li;
	}


};



