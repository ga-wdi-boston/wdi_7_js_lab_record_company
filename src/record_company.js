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
    var list = RCApp.recordCompany.albums,
      i = 0,
      length = list.count;

    // Remove the artist from the album list of artists
    for (; i < length; ) {
      if ( list[i].name === artist.name) {
        list.splice(i, 1);
        break;
      } else {
        i = i + 1;
      }
    }

    // Remove artist from DOM
    artist.remove();

    return true;
  },

  // Event Handlers - careful of keyword this
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
  }
};
