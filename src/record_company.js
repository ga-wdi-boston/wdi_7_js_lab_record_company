// Parent namespace for both artists and albums

RCApp.recordCompany = {
  name      : 'Virgin Records',
  albums    : [],
  artists   : [],
  addArtist : function ( artist ) {
    var parent = document.getElementById('artist_list'),
      counter = parseInt(parent.getAttribute('data-counter')),
      node = RCApp.renderHelper( artist, counter ),
      addAlbumList,
      length = this.albums.length,
      i = 0,
      albumLi,
      albumButton;

    // Add to DOM
    parent.appendChild(node);

    // Now can pull the addAlbumList from DOM
    addAlbumList = document.getElementById('add_albums_' + counter);

    for (; i < length ;) {
      albumLi = document.createElement('li');
      albumButton = document.createElement('button');

      albumButton.id = artist.name + '_' + counter + '_' + this.albums[i].name + '_' + this.albums[i].counter;
      albumButton.innerHTML = this.albums[i].name;
      albumLi.appendChild(albumButton);
      addAlbumList.appendChild(albumLi);

      i = i + 1;
    }

    // Artist properties needed when a new album is added
    artist.counter = counter;
    artist.addAlbumList = addAlbumList;
    // Then push to artists array
    this.artists.push(artist);

    // Increment the counter and set attribute
    counter = counter + 1;
    parent.setAttribute('data-counter', counter);

    return true;
  },
  addAlbum  : function ( album ) {
    var parent = document.getElementById('album_list'),
      counter = parseInt(parent.getAttribute('data-counter')),
      node = RCApp.renderHelper( album, counter ),
      length = this.artists.length,
      i = 0,
      albumLi,
      albumButton;

    album.counter = counter;
    this.albums.push(album);

    // Add album to list of albums an artist can have
    for (; i < length; ) {
      albumLi = document.createElement('li');
      albumButton = document.createElement('button');

      albumButton.id = this.artists[i].name + '_' + this.artists[i].counter + '_' + album.name + '_' + counter;
      albumButton.innerHTML = album.name;
      albumLi.appendChild(albumButton);
      this.artists[i].addAlbumList.appendChild(albumLi);

      i = i + 1;
    }

    counter = counter + 1;
    parent.setAttribute('data-counter', counter);

    // Add to DOM
    parent.appendChild(node);

    return true;
  },

  showDetails       : function ( obj ) {
    var details = obj.getElementsByTagName('div')[0];
      currentClass = details.className;

    if ( currentClass === 'display-on' ) {
      details.setAttribute('class', 'display-off');
    } else {
      details.setAttribute('class', 'display-on');
    }

    return true;
  },

  deleteArtist     : function ( artist ) {

    // Remove artist from DOM
    artist.remove();

    return true;
  },

  //////////////////////////////
  // Event Handlers - careful of keyword this //
  renderArtist  : function (event) {
    var artistName = document.getElementById('artistName'),
      artistDesc = document.getElementById('artistDesc'),
      artist = new RCApp.recordCompany.artist( artistName.value, artistDesc.value );

    event.preventDefault();

    // Remove form input values
    artistName.value = '';
    artistDesc.value = '';

    // Render the artist
    RCApp.recordCompany.addArtist( artist );
    console.log('rendered!');
  },
  renderAlbum   : function (event) {
    var albumName = document.getElementById('albumName'),
      albumBand = document.getElementById('albumBand'),
      albumYear = document.getElementById('albumYear'),
      album = new RCApp.recordCompany.album( albumName.value, albumBand.value, albumYear.value );

    event.preventDefault();

    // Remove form input values
    albumName.value = '';
    albumBand.value = '';
    albumYear.value = '';

    // Render the album
    RCApp.recordCompany.addAlbum( album );
    console.log('rendered!');
  },
  // this should either show or delete
  showOrDelete : function ( event ) {
    var detailsContainer, target, actionArray, action;

    actionArray = event.target.getAttribute('id').split('_');
    action = actionArray[0];
    target = document.getElementById(actionArray[1] + '_' + actionArray[2]);

    event.preventDefault();

    // two event sub-handlers depending on the action
    if ( action === 'show' ) {
      RCApp.recordCompany.showDetails( target );
      // Change the value of the button
      if ( event.target.innerHTML === 'Show' ) {
        event.target.innerHTML = 'Hide';
      } else {
        event.target.innerHTML = 'Show';
      }
    } else if ( action === 'delete' ) {
      RCApp.recordCompany.deleteArtist( target );
    }
  },

  artistAddAlbum    : function (event) {
    var itemArray = event.target.id.split('_'), // 'bob_2_rock_1' artist then album
      artistName = itemArray[0],
      artistId = itemArray[1],
      albumName = itemArray[2],
      albumId = itemArray[3],
      listArtist = document.getElementById('details_artist_' + artistId),
      listAlbum = document.getElementById('details_album_' + albumId),
      listItemArtist = document.createElement('li'),
      listItemAlbum = document.createElement('li');

    event.preventDefault();

    // Populate list items and append to list
    listItemAlbum.innerHTML = artistName;
    listItemArtist.innerHTML = albumName;

    listArtist.appendChild(listItemArtist);
    listAlbum.appendChild(listItemAlbum);
  }
};
