// Root namespace

var RCApp = {
  // Render helper
  renderHelper : function ( obj, counter ) {
    // Create nodes
    var target = document.createElement('li'),
      deleteButton = document.createElement('button'),
      showDetails = document.createElement('button'),
      detailsContainer = document.createElement('div'),
      detailsDesc = document.createElement('p'),
      detailsList = document.createElement('ul'),
      detailsListHeader = document.createElement('h3'),
      addAlbumList = document.createElement('ul'),
      addAlbumListHeader = document.createElement('h3');

    // Update IDs
    target.id = obj.type + '_' + counter;
    deleteButton.id = 'delete_artist_' + counter;
    showDetails.id = 'show_' + obj.type + '_' + counter;
    detailsContainer.className = 'display-off';
    detailsList.id = 'details_' + obj.type + '_' + counter;
    addAlbumList.id = 'add_albums_' + counter;

    // Update Classes (for styling)
    deleteButton.className = "btn btn-default";
    showDetails.className = "btn btn-default";
    target.className = "list-group-item";
    detailsDesc.className = "well";

    // Update HTML
    target.innerHTML = "Name: " + obj.name;
    deleteButton.innerHTML = 'Delete';
    showDetails.innerHTML = 'Show';
    detailsDesc.innerHTML = obj.description;
    addAlbumListHeader.innerHTML = 'Add album';
    if ( obj.type === 'artist' ) {
      detailsListHeader.innerHTML = 'Albums';
    } else {
      detailsListHeader.innerHTML = 'Artists';
    }

    // Append nodes
    detailsContainer.appendChild(detailsDesc);
    detailsContainer.appendChild(detailsListHeader);
    detailsContainer.appendChild(detailsList);

    // Append delete only and add albums list if an artist
    if ( obj.type === 'artist' ) {
      detailsContainer.appendChild(addAlbumListHeader);
      detailsContainer.appendChild(addAlbumList);
      target.appendChild(deleteButton);
    }
    target.appendChild(showDetails);
    target.appendChild(detailsContainer);

    // Always good to save node that we worked so hard to create
    obj.element = target;

    // Return node
    return target;
  },

  // App initializer
  init    : function () {
    var submitArtist = document.getElementById('submitArtist'),
      submitAlbum = document.getElementById('submitAlbum'),
      artistList = document.getElementById('artist_list'),
      albumList = document.getElementById('album_list');

    // Attach event listeners and let it work its magic
    submitArtist.addEventListener('click', this.recordCompany.renderArtist, false);
    submitAlbum.addEventListener('click', this.recordCompany.renderAlbum, false);
    artistList.addEventListener('click', this.recordCompany.showOrDelete, false);
    albumList.addEventListener('click', this.recordCompany.showOrDelete, false);
  }
};
