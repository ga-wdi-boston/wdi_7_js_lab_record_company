RcApp = {}
RcApp.Album = function(name, bandname, year, artists) {
  this.name = name;
  this.bandname = bandname;
  this.year = year;
  this.artists = artists || [];
};
