const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
var l = 0.693;

module.exports = function dateSample(sampleActivity) {
  sampleActivity = Number.parseInt(sampleActivity);
  if(typeof(sampleActivity) != "string"){
    return false;
  }else{
    var k = l/HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity)/k);
  }
};
