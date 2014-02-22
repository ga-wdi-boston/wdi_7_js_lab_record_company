// Parent namespace for both artists and albums

RCApp.recordCompany = {
  name      : 'Virgin Records',
  artists   : [],
  albums    : [],
  addArtist : function ( artist ) {
    var parent = document.getElementById('artist_list'),
      counter = parseInt(parent.getAttribute('data-counter')),
      node = RCApp.renderHelper( artist, counter );

    this.artists.push(artist);

    counter = counter + 1;
    parent.setAttribute('data-counter', counter);

    // Add to DOM
    parent.appendChild(node);

    return true;
  },
  addAlbum  : function ( album ) {
    var parent = document.getElementById('album_list'),
      counter = parseInt(parent.getAttribute('data-counter')),
      node = RCApp.renderHelper( album, counter );

    this.albums.push(album);

    counter = counter + 1;
    parent.setAttribute('data-counter', counter);

    // Add to DOM
    parent.appendChild(node);

    return true;
  },

  // Event Handlers
  renderArtist  : function (event) {
    var artistName = document.getElementById('artistName'),
      artistDesc = document.getElementById('artistDesc'),
      artist = new RCApp.recordCompany.artist( artistName.value, artistDesc.value );

    event.preventDefault();
    RCApp.recordCompany.addArtist( artist );
    console.log('rendered!');
  },
  renderAlbum   : function (event) {
    var albumName = document.getElementById('albumName'),
      albumBand = document.getElementById('albumBand'),
      albumYear = document.getElementById('albumYear'),
      album = new RCApp.recordCompany.album( albumName.value, albumBand.value, albumYear.value );

    event.preventDefault();
    RCApp.recordCompany.addAlbum( album );
  }
};
