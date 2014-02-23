RCApp.Artist = function(name, description){
  this.name = name;
  this.description = description;
  this.id = RCApp.Artist.next();

  this.viewEl = document.createElement('div');

  this.nameEl = document.createElement('span');
  this.nameEl.innerHTML = this.name;

  this.descEl = document.createElement('input');
  this.descEl.setAttribute('id', 'desc-artist-' + this.id);
  this.descEl.setAttribute('placeholder', this.description);
  this.descEl.style.display = 'none';

  this.showButton = document.createElement('button');
  this.showButton.setAttribute('id', 'show-artist-' + this.id);
  this.showButton.innerHTML = 'Show';

  this.deleteButton = document.createElement('button');
  this.deleteButton.setAttribute('id', 'delete-artist-' + this.id);
  this.deleteButton.innerHTML = 'Delete';  

  this.saveButton = document.createElement('button');
  this.saveButton.setAttribute('id', 'save-artist-' + this.id);
  this.saveButton.innerHTML = 'Save';
  this.saveButton.style.display = 'none';

  this.cancelButton = document.createElement('button');
  this.cancelButton.setAttribute('id', 'cancel-artist-' + this.id);
  this.cancelButton.innerHTML = 'Cancel';
  this.cancelButton.style.display = 'none';

  this.viewEl.setAttribute('id', 'artist-view-' + this.id);
  this.viewEl.appendChild(this.nameEl);
  this.viewEl.appendChild(this.descEl);
  this.viewEl.appendChild(this.showButton);
  this.viewEl.appendChild(this.deleteButton);
  this.viewEl.appendChild(this.saveButton);
  this.viewEl.appendChild(this.cancelButton);
}


RCApp.Artist.prototype.view = function(){
  var el = document.createElement('li');
  el.setAttribute('id', 'artist-' + this.id);
  el.appendChild(this.viewEl);
  return el;
};

RCApp.Artist.prototype.show = function(){
  this.descEl.style.display = 'inline';
  this.saveButton.style.display = 'inline';
  this.cancelButton.style.display = 'inline';

  this.showButton.style.display = 'none';
  this.deleteButton.style.display = 'none';
};

RCApp.Artist.prototype.save = function(){
  this.description = this.descEl.value;

  this.descEl.style.display = 'none';
  this.saveButton.style.display = 'none';
  this.cancelButton.style.display = 'none';

  this.showButton.style.display = 'inline';
  this.deleteButton.style.display = 'inline';
};

RCApp.Artist.prototype.cancel = function(){
  this.descEl.value = this.description;
  this.descEl.style.display = 'none';
  this.saveButton.style.display = 'none';
  this.cancelButton.style.display = 'none';

  this.showButton.style.display = 'inline';
  this.deleteButton.style.display = 'inline';
};

// Counter function to get the next value of a counter
// RCApp.Artist.next();
RCApp.Artist.next = (function(){
  var counter = 0;
  return function(){
    counter += 1;
    return  counter
  }
})()