const CustomError = require("../extensions/custom-error");

const chainMaker = {
  newChain : [],
  resString : "",

  getLength() {
    var y = this.newChain;
    return this.newChain.length();
  },
  addLink(value) {
    this.newChain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if(typeof(position) == "number"){
      this.newChain.splice(position - 1, 1);
    }else{
      this.resString = "";
      this.newChain = [];
      throw "THROWN";
    }
    return chainMaker;
  },
  reverseChain() {
    this.newChain.reverse();
    return chainMaker;
  },
  finishChain() {
    for(var i in this.newChain){
      this.resString += "( " + this.newChain[i] + " )~~"
    }
    var res = this.resString.substr(0, this.resString.length - 2);
    this.resString = "";
    this.newChain = [];
    return res;
  }
};

module.exports = chainMaker;
