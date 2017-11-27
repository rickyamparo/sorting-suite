const assert = require('chai').assert;
const insertionSort = require('../insertionsort')

describe("insertion sort", function(){
  it("can sort an array of letters", function(){
    var sorted = insertionSort(["d", "b", "a", "c"]);
    assert.deepEqual(sorted, ["a", "b", "c", "d"]);
  });
});
