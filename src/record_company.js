// Parent namespace for both artists and albums

RCApp.recordCompany = {
  name      : 'Virgin Records',
  albums    : [],
  artists   : [],

  // Helper method for addArtist and addAlbum
  renderAlbumButtons    : function ( obj, array, list ) {
    var length = array.length,
    i = 0,
    albumLi,
    albumButton;

    for (; i < length ;) {
      albumLi = document.createElement('li');
      albumButton = document.createElement('button');

      if ( obj.type === 'artist' ) {
        albumButton.id = obj.name + '_' + obj.counter + '_' + array[i].name + '_' + array[i].counter;
        albumButton.innerHTML = array[i].name;
      } else {
        albumButton.id = array[i].name + '_' + array[i].counter + '_' + obj.name + '_' + obj.counter;
        albumButton.innerHTML = obj.name;
      }

      albumButton.className = "btn btn-default";
      albumLi.appendChild(albumButton);
      if ( list ) {
        list.appendChild(albumLi);
      } else {
        array[i].addAlbumList.appendChild(albumLi);
      }

      i = i + 1;
    }
  },

  addArtist             : function ( artist ) {
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

    // Keep artist in array with essential properties
    artist.counter = counter;
    artist.addAlbumList = addAlbumList;
    this.artists.push(artist);

    // Render album buttons to add albums
    this.renderAlbumButtons( artist, this.albums, addAlbumList );

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

    this.renderAlbumButtons( album, this.artists, null );

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

  //////////////////////////////////////////////
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

  ///// Handles all events for a specific artist / album
  showOrDelete : function ( event ) {
    var detailsContainer, target, actionArray, action, albums,
      i = 0,
      length;

    actionArray = event.target.getAttribute('id').split('_');
    action = actionArray[0];
    target = document.getElementById(actionArray[1] + '_' + actionArray[2]);
    albums = document.getElementsByClassName('album_artist_' + actionArray[2]);
    length = albums.length;

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
      target.remove();
      for (; i < length ; ) {
        albums[0].remove();
        i = i + 1;
      }
    } else {
      RCApp.recordCompany.artistAddAlbum();
    }
  },

  // Sub handler that listens for click on artists list element
  // showOrDelete is the main handler and this gets invoked when it is neither

  artistAddAlbum    : function () {
    var itemArray = event.target.id.split('_'), // 'bob_2_rock_1' artist then album
      artistName = itemArray[0],
      artistId = itemArray[1],
      albumName = itemArray[2],
      albumId = itemArray[3],
      listArtist = document.getElementById('details_artist_' + artistId),
      listAlbum = document.getElementById('details_album_' + albumId),
      listItemArtist = document.createElement('li'),
      listItemAlbum = document.createElement('li');

    // Populate list items and append to list
    listItemAlbum.innerHTML = artistName;
    listItemAlbum.className = 'album_artist_' + artistId;
    listItemArtist.innerHTML = albumName;

    listArtist.appendChild(listItemArtist);
    listAlbum.appendChild(listItemAlbum);

    // Remove the button once added
    event.target.parentNode.remove();
  }
};
