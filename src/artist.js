RCApp.recordCompany.artist = function ( name, description ) {
  this.name = name;
  this.description = description;

  // For the renderHelper
  this.type = 'artist';

};


// Define the prototype with shared behavior
RCApp.recordCompany.artist.prototype = {

  // An artist can add album
  addAlbum : function ( album ) {

  }
};
