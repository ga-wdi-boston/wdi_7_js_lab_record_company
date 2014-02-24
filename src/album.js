var Album = function(name, band, year){
  this.name = name;
  this.band = band;
  this.year = year;
};

Album.prototype.render_album = function() {
  var album_list = document.getElementById('album-list'),
    new_li = document.createElement('li'),
    new_album_name_input = document.getElementById('new-album-name'),
    new_album_band_input = document.getElementById('band-name'),
    new_album_year_input = document.getElementById('year-released'),
    delete_button = document.createElement('button'),
    detail_button = document.createElement('button'),
    detail_ul = document.createElement('ul'),
    band_detail = document.createElement('li'),
    year_detail = document.createElement('li'),
    item_counter;

  item_counter = parseInt(album_list.getAttribute('data-counter'));
  new_li.setAttribute('id', 'item_'+item_counter);
  delete_button.setAttribute('id', 'album_delete_button_'+item_counter);
  detail_button.setAttribute('id', 'album_detail_button_'+ item_counter);
  detail_ul.setAttribute('id', 'album_detail_ul_'+ item_counter);
  band_detail.setAttribute('id', 'band_detail_'+ item_counter);
  year_detail.setAttribute('id', 'year_detail_' + item_counter);
  item_counter += 1;

  new_li.className = 'album-list-item';
  new_li.innerHTML = this.name;
  delete_button.innerHTML = 'Delete';
  delete_button.className = 'album-delete';
  detail_button.innerHTML = 'Details';
  detail_button.className = 'album-details';
  detail_ul.innerHTML = 'Album Detail';
  detail_ul.className = 'album-detail-list';
  band_detail.innerHTML = this.band;
  year_detail.innerHTML = this.year;
  album_list.setAttribute('data-counter', item_counter);

  new_li.appendChild(delete_button);
  new_li.appendChild(detail_button);
  new_li.appendChild(detail_ul);
  detail_ul.appendChild(band_detail);
  detail_ul.appendChild(year_detail);

  new_album_name_input.value = '';
  new_album_band_input.value = '';
  new_album_year_input.value = '';
  return new_li;
};
