RCApp.selectHelper = function(name, optionsArray){
  var selectEl = document.createElement('select');
  for(i; i < optionsArray.length; i++){
    document.createElement('option');
    document.setAttribute('value') = optionsArray[i].id;
    document.innerText = optionsArray[i].name;
  }

}