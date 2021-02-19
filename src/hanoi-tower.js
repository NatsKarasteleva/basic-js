const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  var turns = Math.pow(2, disksNumber) - 1;
  var turnsTime = Math.floor(turns*3600/turnsSpeed);
  var res = {};
  res.turns = turns;
  res.seconds = turnsTime;
  return res;
};
