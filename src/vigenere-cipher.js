const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {  
  _tabulaRecta = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy"
  }

  constructor(flag) {
    this.flag = flag;
  }

  encrypt(plainText, keyword) {
    if( typeof(plainText) !== "string" ){
      throw "THROW";
    }
    if( typeof(keyword) !== "string" ){
      throw "THROW";
    }

    plainText = plainText.toLowerCase();
    keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
    var encryptedText = "";
    var specialCharacterCount = 0;

    for( var i = 0; i < plainText.length; i++ ){
      var keyLetter = (i - specialCharacterCount) % keyword.length;
      var keywordIndex = this._tabulaRecta.a.indexOf(keyword[keyLetter]);

      if( this._tabulaRecta[plainText[i]] ){
        encryptedText += this._tabulaRecta[plainText[i]][keywordIndex];
      }else{
        encryptedText += plainText[i];
        specialCharacterCount++;
      }
    }
    encryptedText = encryptedText.toUpperCase();
    if(this.flag){
      return encryptedText.split('').reverse().join('');
    }
    return encryptedText;
  }    
  decrypt(encryptedText, keyword) {
    if( typeof(encryptedText) !== "string" ){
      throw "THROW";
    }
    if( typeof(keyword) !== "string" ){
      throw "THROW";
    }

    encryptedText = encryptedText.toLowerCase();
    keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
    var decryptedText = "";
    var specialCharacterCount = 0;

    for( var i = 0; i < encryptedText.length; i++ ){
      var keyLetter = (i - specialCharacterCount) % keyword.length;
      var keyRow = this._tabulaRecta[keyword[keyLetter]];

      if( keyRow.indexOf(encryptedText[i]) !== -1 ){
        decryptedText += this._tabulaRecta.a[keyRow.indexOf(encryptedText[i])];
      }else{
        decryptedText += encryptedText[i];
        specialCharacterCount++;
      }
    }

    decryptedText = decryptedText.toUpperCase();
    if(this.flag){
      return decryptedText.split('').reverse().join('');
    }
    return decryptedText;
  }
}

module.exports = VigenereCipheringMachine;
