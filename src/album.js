RCApp.Album = function(name){
  this.name = name;
  this.id = RCApp.Album.next();
};

// Counter function to get the next value of a counter
// RCApp.Album.next();
RCApp.Album.next = (function(){
  var counter = 0;
  return function(){
    counter += 1;
    return  counter
  }
})();
