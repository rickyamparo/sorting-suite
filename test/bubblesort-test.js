const assert = require('chai').assert;
const bubbleSort = require('../bubblesort')

describe("bubble sort", function(){
  it("can sort an array of letters", function(){
    var sorted = bubbleSort(["d", "b", "a", "c"]);
    assert.deepEqual(sorted, ["a", "b", "c", "d"]);
  });
});
