module.exports = function createDreamTeam(members ) {
  var arr = [];
  for(var i in members){
    if(typeof(members[i] === "string")){
      arr.push(members[i][0].toUpperCase());
    }
  }
  arr.sort();
  var res = arr.join('')
  if(res.length == 0){
    return null;
  }
  return res;
};
