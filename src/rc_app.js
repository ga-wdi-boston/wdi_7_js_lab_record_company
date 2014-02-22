// Root namespace

var RCApp = {
  // Render helper
  renderHelper = function ( obj ) {
    // Create nodes
    var target = document.createElement('li'),
      deleteButton = document.createElement('button'),
      detailsContainer = document.createElement('li'),
      detailsDesc = document.createElement('li'),
      detailsList = document.createElement('li');

    // Update IDs

    // Update HTML

    // Append nodes
    detailsContainer.appendChild(detailsDesc);
    detailsContainer.appendChild(detailsList);
    target.appendChild(deleteButton);
    target.appendChild(detailsContainer);

    // Return node
    return target;
  }
};
