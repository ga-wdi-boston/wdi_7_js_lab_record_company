RCApp.albumContent = {
	Album: function(name, year, artist){
		this.name = name;
		this.year = year;
		this.artists = [artist];
		this.id = 'album_' + RCApp.album_counter;
	}

};

RCApp.albumContent.Album.prototype = {

	makeButton: function(type){
		var button;
		button = document.createElement('button');
		button.innerHTML = type.toUpperCase();
		if(type === 'delete'){
			button.className = 'delete-button';
		} else {
			button.className = 'show-button';
		};
		return button;
	},

	nameField: function(){
		var h3 = document.createElement('h3');
		h3.innerHTML = this.name;
		return h3;
	},

	artists: function(){
		var ul, i, length, li;
		ul = document.createElement('ul');
		i = 0;
		length = this.artists.length;

		for(;i < length;){
			li = document.createElement('li');
			li.appendChild(this.artists[i][name]);
			i = i + 1;
		};

		return ul;

	},

	showDetails: function(){
		var div = document.createElement('div');
		div.className = 'hide';
		div.appendChild(this.descField());
		return div;
	},

	renderMe: function(){
		var new_li;
		new_li = document.createElement('li');
		new_li.id = this.id;
		new_li.appendChild(this.nameField());
		new_li.appendChild(this.makeButton('delete'));
		new_li.appendChild(this.makeButton('show'));
		// new_li.appendChild(this.)
		return new_li;
	}

};

