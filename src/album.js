RCApp.recordCompany.album = function ( name, bandName, year ) {
  this.name = name;
  this.bandName = bandName;
  this.year = year;

  this.description = bandName + ' | ' + year;

  // For the renderHelper
  this.type = 'album';

};
