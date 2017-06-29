var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });

// Expected result = [6, 7, 2, 5, 3]


// Use of built-in map function
// var wordLength = words.map(function(word) {
//   return word.length;
// });

// My own version of map function
var myMap = function(wordList) {
var wordListArray = []
  wordList.forEach(function(word) {
    wordListArray.push(word.length)
  });
  return wordListArray;
}

console.log(myMap(words));