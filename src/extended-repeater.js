module.exports = function repeater(str, options) {
  var res = "";
  if(options.repeatTimes != undefined){
  for (let index = 0; index < Number.parseInt(options.repeatTimes); index++) {
    if(index != 0){
      if(options.separator != undefined){
        res+=options.separator;
      }else{
        res+='+';
      }
    }
    res += str;
    if(options.additionRepeatTimes != undefined){
    for (let i = 0; i < Number.parseInt(options.additionRepeatTimes); i++) {
      res+=options.addition;
      if(i+1 != options.additionRepeatTimes){
        
        if(options.additionSeparator != undefined){
          res+=options.additionSeparator;
        }else{
          res+='|';
        }
      }
    }
    }
  }
}else{
  res+= str + options.addition;
}
  return res;
};
  