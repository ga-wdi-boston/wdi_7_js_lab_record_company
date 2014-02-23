var Artist = function(name, description){
  this.name = name;
  this.description = description;
};

Artist.prototype.render_artist = function() {
  var new_li = document.createElement('li'),
  new_artist_name_input = document.getElementById('new-artist-name'),
  new_artist_description_input = document.getElementById('new-artist-description');
    // complete_button = document.createElement('button'),
    // finished_list = document.getElementById('finished'),
    // delete_button = document.createElement('button');

  new_li.className = 'artist-list-item';
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

  new_artist_name_input.value = '';
  new_artist_description_input.value = '';
  return new_li;
};
