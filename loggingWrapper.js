var wrapLog = function (callback, name) {
  return function(x, y, z){
    var multiply = callback(x, y, z);
    var argString = "";
    var argArray = Array.from(arguments);
    argArray.forEach(function(item, i){
      argString += item.toString();
      if(i != argArray.length - 1){
        argString += ", ";
      }
    });
    var resultString = name + "(" + argString + ") => " + multiply.toString();
    return resultString;
  }
};

var area = function (x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 20
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24
