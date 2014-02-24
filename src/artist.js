
// Constructor function for Artist
RCApp.Artist = (function(){
	function Artist(name, description){
	  this.name = name;
    this.description = description;
   }

	// Creates the li tag for artist name: <li> Artist Name </li>
	Artist.prototype.getShortHTML = function() {
		var shortHTML = document.createElement('li');
		shortHTML.innerHTML = this.name;
		return shortHTML;
	};

	return Artist;
})();