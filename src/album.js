var Album = function(name, band, year){
  this.name = name;
  this.band = band;
  this.year = year;
};

Album.prototype.render_album = function() {
  var new_li = document.createElement('li'),
  new_album_name_input = document.getElementById('new-album-name'),
  new_album_band_input = document.getElementById('band-name'),
  new_album_year_input = document.getElementById('year-released');
    // complete_button = document.createElement('button'),
    // finished_list = document.getElementById('finished'),
    // delete_button = document.createElement('button');

  new_li.className = 'album-list-item';
  new_li.innerHTML = this.name;
  // complete_button.innerHTML = 'Complete';
  // complete_button.className = 'complete';
  // new_li.appendChild(complete_button);

  // complete_button.onclick = function(event) {
  //   event.preventDefault;
  //   finished_list.appendChild(this.parentNode); //this removes the item from it's existing location, since it already exists
  //   this.remove();
  //   return false;
  // };

  // delete_button.innerHTML = 'Delete';
  // delete_button.className = 'delete';
  // new_li.appendChild(delete_button);

  // delete_button.onclick = function(event) {
  //   event.preventDefault;
  //   this.parentNode.remove();
  //   return false;
  // };

  new_album_name_input.value = '';
  new_album_band_input.value = '';
  new_album_year_input.value = '';
  return new_li;
};
