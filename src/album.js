RCApp.recordCompany.album = function ( name, bandName, year ) {
  this.name = name;
  this.bandName = bandName;
  this.year = year;

  this.description = 'Bandname: ' + bandName + ' | Year Released: ' + year;

  // For the renderHelper
  this.type = 'album';

};
