var RCApp = RCApp || {};

window.onload = function(){

  RCApp.ArtistList.init( document.getElementById('artist-list'),
    document.getElementById('new-artist-form'),
    document.getElementById('new-artist-name'),
    document.getElementById('new-artist-desc')
    );


  alert('onload handler');
}
