var playlist = {Coltrane: "Giant Steps"};
function updatePlaylist( object, key, value){
  return object.assign({}, object, {[key]: value})
};
function removeFromPlaylist(object, key){
  return object.delete.key
};
