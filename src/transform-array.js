module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw "THROW";
  }
  var disNext = "--discard-next";
  var disPrev = "--discard-prev";
  var doubleNext = "--double-next";
  var doublePrev = "--double-prev";
  var res = [];
  var disNextFlag = false;
  var doubleNextFlag = false;
  var globPrev;
  for(var i in arr){
    
    if(disNextFlag){
      disNextFlag = false;
      continue;
    }else if(doubleNextFlag){
      res.push(arr[i]);
      res.push(arr[i]);
      doubleNextFlag = false;
    }else if(arr[i] == disNext){
      disNextFlag = true;
    }else if(arr[i] == disPrev){
        if(res.length != 0 && res[res.length - 1] == arr[i-1]){
        res.pop();
    }
    }else if(arr[i] == doubleNext){
      doubleNextFlag = true;
    }else if(arr[i] == doublePrev){
      if(res.length > 0 && globPrev != res[res.length - 1]){
        res.push(arr[i-1]);
      }
    }else{
      res.push(arr[i]);
      globPrev = arr[i];
    }
  }
  return res;
};
