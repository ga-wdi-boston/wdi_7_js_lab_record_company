var RCApp = RCApp || {};

window.onload = function() {

    RCApp.ArtistList.init( document.getElementById('artist-list'),
    document.getElementById('new-artist-form'),
    document.getElementById('new-artist-name'),
    document.getElementById('new-artist-desc'),
    );

    RCApp.AlbumList.init( document.getElementById('album-list'),
    document.getElementById('new-album-form'),
    document.getElementById('new-album-name'),
    document.getElementById('artist-name'),
    document.getElementById('new-album-year')
    );
