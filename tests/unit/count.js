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
      assert.deepEqual(count('last', [5, 2, 7, 6, 8, 3, 1, 4]), { comparisons: 16, sorted: [1, 2, 3, 4, 5, 6, 7, 8] });
    });
  });

  describe('when choosing the last element of the array as the pivot', function() {
    it('works', function () {
      assert.deepEqual(count('last', []), { comparisons: 0, sorted: [] });
      assert.deepEqual(count('last', [1]), { comparisons: 0, sorted: [1] });
      assert.deepEqual(count('last', [1, 2]), { comparisons: 1, sorted: [1, 2] });
      assert.deepEqual(count('last', [1, 2, 3]), { comparisons: 3, sorted: [1, 2, 3] });
      assert.deepEqual(count('last', [1, 2, 3, 4]), { comparisons: 6, sorted: [1, 2, 3, 4] });
      assert.deepEqual(count('last', [1, 2, 3, 4, 5]), { comparisons: 10, sorted: [1, 2, 3, 4, 5] });
      assert.deepEqual(count('last', [1, 2, 3, 4, 5, 6]), { comparisons: 15, sorted: [1, 2, 3, 4, 5, 6] });
      assert.deepEqual(count('last', [5, 2, 7, 6, 8, 3, 1, 4]), { comparisons: 16, sorted: [1, 2, 3, 4, 5, 6, 7, 8] });
    });
  });

  describe('when choosing the "median of three" as the pivot', function() {
    it('works', function() {
      assert.deepEqual(count('median', []), { comparisons: 0, sorted: [] });
      assert.deepEqual(count('median', [1]), { comparisons: 0, sorted: [1] });
      assert.deepEqual(count('median', [1, 2]), { comparisons: 1, sorted: [1, 2] });
      assert.deepEqual(count('median', [1, 2, 3]), { comparisons: 2, sorted: [1, 2, 3] });
      assert.deepEqual(count('median', [1, 2, 3, 4]), { comparisons: 4, sorted: [1, 2, 3, 4] });
      assert.deepEqual(count('median', [1, 2, 3, 4, 5]), { comparisons: 6, sorted: [1, 2, 3, 4, 5] });
      assert.deepEqual(count('median', [1, 2, 3, 4, 5, 6]), { comparisons: 8, sorted: [1, 2, 3, 4, 5, 6] });
      assert.deepEqual(count('median', [5, 2, 7, 6, 8, 3, 1, 4]), { comparisons: 13, sorted: [1, 2, 3, 4, 5, 6, 7, 8] });
    });
  });
});
