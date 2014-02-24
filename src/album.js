RCApp.albumContent = {
	Album: function(name, year, artist){
		if(arguments[0] !== '' && arguments[1] !== '' && arguments[2] !== ''){
			this.name = name;
			this.year = year;
			this.artists = [artist];
			this.id = 'album_' + RCApp.album_counter;
		} else {
			throw new Error('Album name, year and artist are required');
		};
	}

};

RCApp.albumContent.Album.prototype = {

	makeButton: function(type){
		var button;
		button = document.createElement('button');
		button.innerHTML = type;
		if(type === 'Delete'){
			button.innerHTML = '<span class="glyphicon glyphicon-trash"></span>';
			button.className = 'delete-button btn button-default';
		} else {
			button.className = 'show-button btn button-default';
		};
		return button;
	},

	nameField: function(){
		var h3 = document.createElement('h3');
		h3.innerHTML = this.name;
		return h3;
	},

	yearField: function(){
		var p, div;
		div = document.createElement('div')
		div.innerHTML = '<h4>Release year: ' + this.year + '</h4><hr>'
		return div;
	},

	artistList: function(){
		var list, i, length, li, div;
		div = document.createElement('div');
		div.innerHTML = '<h3>Artists</h3>';

		list = document.createElement('ul');
		i = 0;
		length = this.artists.length;

		for(;i < length;){
			li = document.createElement('li');
			li.innerHTML = this.artists[i];
			list.appendChild(li);
			i = i + 1;
		};
		div.appendChild(list);
		return div;
	},

	showDetails: function(){
		var outer_div, inner_div;
		outer_div = document.createElement('div');
		outer_div.className = 'hide details';

		inner_div = document.createElement('div');
		inner_div.className = 'panel panel-default';

		inner_div.appendChild(this.yearField());
		inner_div.appendChild(this.artistList());
		outer_div.appendChild(inner_div);
		return outer_div;
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

