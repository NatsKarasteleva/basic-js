module.exports = function createDreamTeam(members ) {
  var arr = [];
  for(var i in members){
    if(typeof(members[i] === "string")){
      arr.push(members[i][0].toUpperCase());
    }
  }
  arr.sort();
  return arr.join('');
};
