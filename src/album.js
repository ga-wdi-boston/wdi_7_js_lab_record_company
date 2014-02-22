RCApp.recordCompany.album = function ( name, bandName, year ) {
  this.name = name;
  this.bandName = bandName;
  this.year = year;

  // An album can have many artists
  this.artists = [];

};

// Define the prototype with shared behavior
RCApp.recordCompany.album.prototype = {

  // An album can show and hide details through CSS classes
  this.showDetails : function ( ) {
    // need an element property to the artist object to manipulate
  }
};
