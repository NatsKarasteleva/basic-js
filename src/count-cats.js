module.exports = function countCats( matrix ) {
  var cats = 0;
  for(var i in matrix){
    for(var j in matrix[i]){
      if(matrix[i][j] == "^^"){
        cats++;
      }
    }
  }
  return cats;
};
