// Parent namespace for both artists and albums

RCApp.recordCompany = {
  name      : 'Virgin Records',
  artists   : [],
  albums    : [],
  addArtist : function ( artist ) {
    this.artists.push(artist);
  },
  addAlbum  : function ( album ) {
    this.albums.push(album);
  }
};
