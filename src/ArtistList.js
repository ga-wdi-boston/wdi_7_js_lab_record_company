// This is basically all Tom's code, I used it to try and get it working initially
// and planned on writing my own, but I fell asleep before i could get around to
// completing it. I don't expect that this will be graded as part of my work.

RCApp.ArtistList = {};

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
      'delete': this.deleteArtist.bind(this)
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

