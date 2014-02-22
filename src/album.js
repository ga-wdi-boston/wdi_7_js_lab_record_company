RCApp.recordCompany.album = function ( name, bandName, year ) {
  this.name = name;
  this.bandName = bandName;
  this.year = year;

  this.description = bandName + ' | ' + year;

  // An album can have many artists
  this.list = [];

  // For the renderHelper
  this.type = 'album';

};

// Define the prototype with shared behavior
RCApp.recordCompany.album.prototype = {

  // An album can show and hide details through CSS classes
  showDetails : function ( ) {
    // need an element property to the artist object to manipulate
  }
};
