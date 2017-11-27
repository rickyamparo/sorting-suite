var pry = require('pryjs');

function insertionSort(letters){
  var size = letters.length
  for (var i = 1; i < size; i++) {
    var tmp = letters[i];
    for (var j = i - 1; j >= 0 && (letters[j] > tmp); j--) {
      letters[j+1] = letters[j];
    };
    letters[j+1] = tmp;
  };
  return letters;
  // eval(pry.it);
};

module.exports = insertionSort;
