var playlist = {Coltrane: "Giant Steps"};
function updatePlaylist( obj, key, value){
  return Object.assign(obj, {[key]: value})
};
function removeFromPlaylist(obj, key){
  return Object.delete(obj, [key]);
};
