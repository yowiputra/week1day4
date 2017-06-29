var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback){
  var mappedArr = [];
  array.forEach(function(item){
    mappedArr.push(callback(item));
  })
  return mappedArr;
}

var wordLengthArray = map(words, function(word) {
  return word.length;
});

console.log(wordLengthArray);