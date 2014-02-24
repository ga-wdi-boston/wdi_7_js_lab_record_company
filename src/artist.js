var Artist = function(name, description){
  this.name = name;
  this.description = description;
};

Artist.prototype.render_artist = function() {
  var artist_list = document.getElementById('artist-list'),
    new_li = document.createElement('li'),
    new_artist_name_input = document.getElementById('new-artist-name'),
    new_artist_description_input = document.getElementById('new-artist-description'),
    delete_button = document.createElement('button'),
    detail_button = document.createElement('button'),
    detail_ul = document.createElement('ul'),
    artist_description = document.createElement('li'),
    item_counter;

  item_counter = parseInt(artist_list.getAttribute('data-counter'));
  new_li.setAttribute('id', 'item_'+ item_counter);
  delete_button.setAttribute('id', 'delete_button_'+ item_counter);
  detail_button.setAttribute('id', 'detail_button_'+ item_counter);
  detail_ul.setAttribute('id', 'detail_ul_'+ item_counter);
  artist_description.setAttribute('id', 'artist_description_'+ item_counter);
  item_counter += 1;

  new_li.className = 'artist-list-item';
  new_li.innerHTML = this.name;
  delete_button.innerHTML = 'Delete';
  delete_button.className = 'delete';
  detail_button.innerHTML = 'Details';
  detail_button.className = 'details';
  detail_ul.innerHTML = 'Artist Detail';
  detail_ul.className = 'artist-detail-list';
  artist_description.innerHTML = this.description;
  artist_list.setAttribute('data-counter', item_counter);

  new_li.appendChild(delete_button);
  new_li.appendChild(detail_button);
  new_li.appendChild(detail_ul);
  detail_ul.appendChild(artist_description);

  new_artist_name_input.value = '';
  new_artist_description_input.value = '';
  return new_li;
};
