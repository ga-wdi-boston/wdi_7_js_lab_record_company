RCApp.recordCompany.artist = function ( name, description ) {
  this.name = name;
  this.description = description;

  // An artist can have many albums
  this.albums = [];

};
