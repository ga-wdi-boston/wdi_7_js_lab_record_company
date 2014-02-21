window.onload = function() {
  var inputText = document.getElementById('input-text'),
           list = document.getElementById('artists-list');
   // Add delete item event listener on the list itself.
   list.addEventListener('click', ArtistList.artistDelete, false);
   inputText.addEventListener('change', ArtistList.addArtist, false);
  }

