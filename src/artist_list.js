RCApp.ArtistList = {};
alert('loading artist_list.js');

RCApp.ArtistList.init = function(artistListEl, newArtistForm, newArtistName, newArtistDesc){
  this.listEl = artistListEl;
  this.newArtistForm = newArtistForm;
  this.newArtistNameEl = newArtistName;
  this.newArtistDescEl = newArtistDesc;
  this.newArtistForm.addEventListener('submit', this.addArtist.bind(this), false);

  this.listEl.addEventListener('click', this.artistHandler.bind(this), false);

  this.artists = {};

  this.actionDispatcher = {
      'show': this.showArtist.bind(this),
      'delete': this.deleteArtist.bind(this),
      'save': this.saveArtist.bind(this)
      };
};

RCApp.ArtistList.artistHandler = function(event){
  var targetValues = event.target.getAttribute('id').split('-'),
    targetID = targetValues.pop(),
    targetAction = targetValues.shift();
    this.actionDispatcher[targetAction](targetID);
    event.preventDefault();

};

RCApp.ArtistList.showArtist = function(id){
  var artist = this.artists[id];
  artist.show();
};

RCApp.ArtistList.saveArtist = function(id){
  var artist = this.artists[id];
  artist.save();
}

RCApp.ArtistList.deleteArtist = function(id){
  // this.artists[id].show();
};  

RCApp.ArtistList.addArtist = function(event){
  var artist = new RCApp.Artist(this.newArtistNameEl.value, this.newArtistDescEl.value);
  this.artists[artist.id] = artist;
  this.listEl.appendChild(artist.view());
  this.newArtistNameEl.value= '';
  this.newArtistDescEl.value = ''; 
  event.preventDefault(); 
};




