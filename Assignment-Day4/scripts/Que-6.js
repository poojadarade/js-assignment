
var number = (function ask() {
    var n = prompt("Enter a number greater than 100?",0);
    return isNaN(n) || +n <= 100 ? ask() : n;
  }());