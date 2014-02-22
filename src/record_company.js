// Parent namespace for both artists and albums

RCApp.recordCompany = function (name) {
  this.name = name;

  // A record company may have many artists and albums
  this.artists = [];
  this.albums = [];
};
