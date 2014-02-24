RcApp = {}
RcApp.Album = function(name, bandname, year, artists) {
  this.name = name;
  this.bandname = bandname;
  this.year = year;
  this.artists = artists || [];
};

RcApp.Artist = function(name, description, albums){
  this.name = name;
  this.description = description;
  this.albums = albums || [];
};
