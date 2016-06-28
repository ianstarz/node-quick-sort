'use strict';

var assert = require('chai').assert;
var count = require('../../index')

describe('counting the number of comparisons', function() {
  describe('when choosing the first element of the array as the pivot', function() {
    it('works', function () {
      assert.deepEqual(count('first', []), { comparisons: 0, sorted: [] });

      assert.deepEqual(count('first', [1]), { comparisons: 0, sorted: [1] });

      assert.deepEqual(count('first', [1, 2]), { comparisons: 1, sorted: [1, 2] });
      assert.deepEqual(count('first', [1, 2, 3]), { comparisons: 3, sorted: [1, 2, 3] });
      assert.deepEqual(count('first', [1, 2, 3, 4]), { comparisons: 6, sorted: [1, 2, 3, 4] });
      assert.deepEqual(count('first', [1, 2, 3, 4, 5]), { comparisons: 10, sorted: [1, 2, 3, 4, 5] });
      assert.deepEqual(count('first', [1, 2, 3, 4, 5, 6]), { comparisons: 15, sorted: [1, 2, 3, 4, 5, 6] });

      assert.deepEqual(count('first', [6]), { comparisons: 0, sorted: [6] });
      assert.deepEqual(count('first', [6, 5]), { comparisons: 1, sorted: [5, 6] });
      assert.deepEqual(count('first', [6, 5, 4]), { comparisons: 3, sorted: [4, 5, 6] });

      assert.deepEqual(count('first', [2, 1, 3]), { comparisons: 2, sorted: [1, 2, 3] });
      assert.deepEqual(count('first', [2, 1, 3, 4]), { comparisons: 4, sorted: [1, 2, 3, 4] });
      assert.deepEqual(count('first', [3, 1, 2, 4, 5]), { comparisons: 6, sorted: [1, 2, 3, 4, 5] });

      assert.deepEqual(count('first', [3, 8, 2, 5, 1, 4, 6, 7]), { comparisons: 15, sorted: [1, 2, 3, 4, 5, 6, 7, 8] });
      assert.deepEqual(count('first', [3, 34, 2, 49, 1, 27, 6, 16]), { comparisons: 16, sorted: [1, 2, 3, 6, 16, 27, 34, 49] });
    });
  });
});
