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
      detailsListItem,
      listLength = obj.list.length,
      i = 0;

    // Update IDs
    target.id = obj.type + '_' + counter;
    deleteButton.id = 'delete_artist_' + counter;
    showDetails.id = 'show_' + obj.type + '_' + counter;
    detailsContainer.className = 'display-off'
    // Update HTML
    target.innerHTML = obj.name;
    deleteButton.innerHTML = 'Delete';
    showDetails.innerHTML = 'Show';
    detailsDesc.innerHTML = obj.description;

    // Create new list item and append to detailsList
    for (; i < listLength;) {
      detailsListItem = document.createElement('li');
      detailsListItem.innerHTML = obj.list[i].name;
      detailsList.appendChild(detailsListItem);
      i = i + 1;
    }

    // Append nodes
    detailsContainer.appendChild(detailsDesc);
    detailsContainer.appendChild(detailsList);

    // Append delete only if an artist
    if ( obj.type === 'artist' ) {
      target.appendChild(deleteButton);
    }
    target.appendChild(showDetails);
    target.appendChild(detailsContainer);

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

    // Attach event listeners
    submitArtist.addEventListener('click', this.recordCompany.renderArtist, false);
    submitAlbum.addEventListener('click', this.recordCompany.renderAlbum, false);
    artistList.addEventListener('click', this.recordCompany.showOrDelete, false);
    albumList.addEventListener('click', this.recordCompany.showOrDelete, false);
  }
};
