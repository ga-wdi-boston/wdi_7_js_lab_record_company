RCApp.recordCompany.artist = function ( name, description ) {
  this.name = name;
  this.description = description;

  // An artist can have many albums
  this.albums = [];

};


// Define the prototype with shared behavior
RCApp.recordCompany.artist.prototype = {

  // An artist can add album
  this.addAlbum : function ( album ) {
    this.albums.push( album );
  },
  // An artist can show and hide details through CSS classes
  this.showDetails = function ( ) {
    // need an element property to the artist object to manipulate
  }
};
