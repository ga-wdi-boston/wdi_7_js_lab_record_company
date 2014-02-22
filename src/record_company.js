// Parent namespace for both artists and albums

RCApp.recordCompany = function (name) {
  this.name = name;

  // A record company may have many artists and albums
  this.artists = [];
  this.albums = [];
};


// Define the prototype with shared behavior
RCApp.recordCompany.prototype = {

  // A record company can add artists and albums
  this.addArtist : function ( artist ) {
    this.artists.push(artist);
  },
  this.addAlbum : function ( album ) {
    this.albums.push(album);
  }
};
