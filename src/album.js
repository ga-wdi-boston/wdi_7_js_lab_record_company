Album = function(name, bandname, year, artists) {
  this.name = name;
  this.bandname = bandname;
  this.year = year;
  this.artists = artists || [];
};

Album.prototype.new_album_button = function() {
  var album_list,
      add_album_button;

  album_list = document.getElementById('album-list'),
  add_album_button = document.getElementById('add-album-button');
  add_album_button.onclick = function(event) {
  event.preventDefault();
  RecordCompany.new_album(album_list);
  return false;
  };
}
