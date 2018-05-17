var playlist = {Coltrane: "Giant Steps"};
function updatePlaylist( object, key, value){
  return playlist.assign({}, object, {[key]: value})
};
function removeFromPlaylist(object, key){
  return playlist.delete.key
};
