module.exports = function createDreamTeam(members ) {
  if(!Array.isArray(members)){
    return false;
  }
  var arr = [];
  for(var i in members){
    if(typeof(members[i]) === "string"){
      var t = members[i].trim();
      arr.push(t[0].toUpperCase());
    }
  }
  arr.sort();
  var res = arr.join('')
  if(res.length == 0){
    return false;
  }
  return res;
};
