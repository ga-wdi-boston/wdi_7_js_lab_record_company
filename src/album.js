RCApp.recordCompany.album = function ( name, bandName, year ) {
  this.name = name;
  this.bandName = bandName;
  this.year = year;

  // An album can have many artists
  this.artists = [];
};
