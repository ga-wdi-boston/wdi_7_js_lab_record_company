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
		button.innerHTML = type;
		if(type === 'Delete'){
			button.innerHTML = '<span class="glyphicon glyphicon-trash"></span>';
			button.className = 'delete-button btn button-default';
		} else {
			button.className = 'show-button btn button-default';
		}
		return button;
	},

	albumList: function(){
		var list, i, length, li, div;
		div = document.createElement('div');
		div.innerHTML = '<h4>Albums<hr></h4>'

		list = document.createElement('ul');
		i = 0;
		length = this.albums.length;

		for(;i < length;){
			li = document.createElement('li');
			li.innerHTML = this.albums[i];
			list.appendChild(li);
			i = i + 1;
		};
		div.appendChild(list);
		div.appendChild(this.albumForm());
		return div;
	},

	nameField: function(){
		var h3 = document.createElement('h3');
		h3.innerHTML = this.name;
		return h3;
	},

	descField: function(){
		var div, p;
		div = document.createElement('div');
		div.innerHTML = '<h4>Description<hr></h4>'
		p = document.createElement('p');
		p.innerHTML = this.desc;
		div.appendChild(p)
		return div;
	},

	albumForm: function(){
		var form, select, submit, artist;
		artist = this;
		form = document.createElement('form');
		form.innerHTML = '<h5>Add an album to this artist</h5>';
		select = document.createElement('select');
		select.id = 'add-artist-album';
		select.className = 'form-control';
		form.appendChild(select);

		button = document.createElement('button');
		button.className = 'btn button-default';
		button.innerHTML = 'Add Album';
		button.id = 'add-album-to-artist-button';
		button.onclick = function(event){
			var album, field;
			field = document.getElementById('add-artist-album');
				artist.albums.push(field.value);
			};
		form.appendChild(button);
		return form;
	},

	showDetails: function(){
		var outer_div, inner_div;
		outer_div = document.createElement('div');
		outer_div.className = 'hide details';

		inner_div = document.createElement('div');
		inner_div.className = 'panel panel-default';

		inner_div.appendChild(this.descField());
		inner_div.appendChild(this.albumList());
		outer_div.appendChild(inner_div);
		return outer_div;
	},

	renderMe: function(){
		var new_li;
		new_li = document.createElement('li');
		new_li.id = this.id;
		new_li.className = 'item';
		new_li.appendChild(this.nameField());
		new_li.appendChild(this.makeButton('Delete'));
		new_li.appendChild(this.makeButton('Show details'));
		new_li.appendChild(this.showDetails());
		RCApp.populateAlbums(new_li.querySelector('select'));
		return new_li;
	}

};



