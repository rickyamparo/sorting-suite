var pry = require('pryjs');

function bubbleSort(letters){
  for (var j = 0; j < letters.length; j++) {
    letters = oneSort(letters);
  };
  return letters;
};

function oneSort(letters){
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] > letters[i+1]) {
      var tmp = letters[i]
      letters[i] = letters[i+1];
      letters[i+1] = tmp;
    };
  };
  return letters;
}

module.exports = bubbleSort;
