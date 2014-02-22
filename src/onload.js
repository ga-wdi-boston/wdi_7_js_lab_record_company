window.onload = function() {
  var newartistButton = document.getElementById("newartist");
  //var newartistDesc   = document.getElementById("newartist-desc");
  var artistList      = document.getElementById("artists-list");
  var newalbumButton  = document.getElementById("newalbum");
  var albumList       = document.getElementById("albums-list");

  newartistButton.addEventListener("click", RCApp.createArtist, false);
  artistList.addEventListener("click", RCApp.toggleShow, false);
  artistList.addEventListener("click", RCApp.deleteItem, false);

  newalbumButton.addEventListener("click", RCApp.createAlbum, false);
  albumList.addEventListener("click", RCApp.toggleShow, false);
  albumList.addEventListener("click", RCApp.deleteItem, false);

  RCApp.renderLists("albums");
}