module.exports = function getSeason(date) {
  if(date === undefined){
		return 'Unable to determine the time of year!';
	}
  try {
    date.getYear();
} catch(err) {
    throw 'THROWN';
}
  var date = date.getMonth();
  
  var emptyStr = 'Unable to determine the time of year!';
  /*if(date.length == 0){
    return emptyStr;
  }*/
  var winter = "winter";
  var spring = "spring";
  var summer = "summer";
  var fall = "fall";
    var month = date;
    if(month == 2 || month == 3 || month == 4){
      return spring;
    }
    if(month == 5 || month == 6 || month == 7){
      return summer;
    }
    if(month == 8 || month == 9 || month == 10){
      return fall;
    }
    if(month == 11 || month == 0 || month == 1){
      return winter;
    }
};
