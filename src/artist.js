Artist = function(name, description, albums) {
  this.name = name;
  this.description = description;
  this.albums = albums || [];
};

Artist.prototype.new_artist_button = function() {
  var artist_list,
      add_artist_button;

  artist_list = document.getElementById('artist-list'),
  add_artist_button = document.getElementById('add-artist-button');
  add_artist_button.onclick = function(event) {
  event.preventDefault();
  RecordCompany.new_artist(artist_list);
  return false;
  };
}
