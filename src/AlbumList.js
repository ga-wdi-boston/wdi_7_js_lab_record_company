// This is basically all Tom's code, I used it to try and get it working initially
// and planned on writing my own, but I fell asleep before i could get around to
// completing it. I don't expect that this will be graded as part of my work.

RCApp.AlbumList = {};

RCApp.AlbumList.init = function(albumListEl, newAlbumForm, newAlbumName, newAlbumDesc){
  this.listEl = albumListEl;
  this.newAlbumForm = newAlbumForm;
  this.newAlbumNameEl = newAlbumName;
  this.newAlbumDescEl = newAlbumDesc;
  this.artistNameEL = document.getElementById(RCApp.Artist.next); // NOPE
  this.newAlbumForm.addEventListener('submit', this.addAlbum.bind(this), false);

  this.listEl.addEventListener('click', this.albumHandler.bind(this), false);

  this.albums = {};

  this.actionDispatcher = {
      'show': this.showAlbum.bind(this),
      'delete': this.deleteAlbum.bind(this)
      };
};

RCApp.AlbumList.artistDropDown = function(){
  var albumArtist = document.getElementById("artist-name"),
      artist_id,
      artist_name,
      artistItems;

  artist_id = RCApp.Artist.id;
  artist_name = RCApp.Artist.name;
  artistItems = document.createElement("menu");
  menu.setAttribute('id', 'artist_name'+ artist_id );
  menu.textContent = artist_name;
  albumArtist.appendChild(artistItems);
// Could not get this to work for the life of me,
// Probably because i couldn't get anything else to work?
};

RCApp.AlbumList.albumHandler = function(event){
  var targetValues = event.target.getAttribute('id').split('-'),
    targetID = targetValues.pop(),
    targetAction = targetValues.shift();
    this.actionDispatcher[targetAction](targetID);
    event.preventDefault();

};

RCApp.AlbumList.showAlbum = function(id){
  var album = this.albums[id];
  album.show();
};

RCApp.AlbumList.deleteAlbum = function(id){
  // this.albums[id].show();
};

RCApp.AlbumList.addAlbum = function(event){
  var album = new RCApp.Album(this.newAlbumNameEl.value, this.newAlbumDescEl.value, this.artistName.value);
  this.albums[album.id] = album;
  this.listEl.appendChild(album.view());
  this.newAlbumNameEl.value= '';
  this.newAlbumDescEl.value = '';
  this.artistNameEL.value = artistDropDown.selectedIndex
  event.preventDefault();
};

