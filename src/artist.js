RCApp.artistContent = {

	Artist: function(name, description){
		this.name = name;
		this.desc = description;
		this.albums = [];
		this.id = 'artist_' + RCApp.artist_counter;
	}
};

RCApp.artistContent.Artist.prototype = {

	makeButton: function(type){
		var button;
		button = document.createElement('button');
		button.innerHTML = type.toUpperCase();
		if(type === 'Delete'){
			button.innerHTML = '<span class="glyphicon glyphicon-trash"></span>';
			button.className = 'delete-button btn button-default';
		} else {
			button.className = 'show-button btn button-default';
		}
		return button;
	},

	albumList: function(){
		var list, i, length, li;
		list = document.createElement('ul');
		i = 0;
		length = this.albums.length;

		for(;i < length;){
			li = document.createElement('li');
			li.innerHTML = this.albums[i];
			list.appendChild(li);
			i = i + 1;
		};
		return list;
	},

	nameField: function(){
		var h3 = document.createElement('h3');
		h3.innerHTML = this.name;
		return h3;
	},

	descField: function(){
		var p = document.createElement('p');
		p.innerHTML = this.desc;
		return p;
	},

	showDetails: function(){
		var div = document.createElement('div');
		div.className = 'hide';
		div.appendChild(this.descField());
		div.appendChild(this.albumList());
		return div;
	},

	renderMe: function(){
		var new_li;
		new_li = document.createElement('li');
		new_li.id = this.id;
		new_li.appendChild(this.nameField());
		new_li.appendChild(this.makeButton('Delete'));
		new_li.appendChild(this.makeButton('Show details'));
		new_li.appendChild(this.showDetails());
		return new_li;
	}

};



