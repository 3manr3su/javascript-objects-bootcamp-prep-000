var playlist = {Coltrane: "Giant Steps"};
function updatePlaylist( obj, key, value){
  return obj.assign(obj, {[key]: value})
};
function removeFromPlaylist(obj, key){
  return obj.delete[key];
};
