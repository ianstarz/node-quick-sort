'use strict';

function quickSort(method, A) {
  let count = 0;

  return {
    sorted: partition(method, A, 0, A.length-1),
    comparisons: count
  };

  function partition(method, _A, l, r) {
    let length = r - l;
    let A = _A;

    if (length < 1) {
      return A;
    }

    count += length;

    A = preprocessPivot(method, _A, l, r);

    let p = A[l];
    let i = l + 1;
    let j = l + 1;
    let _x, _y;

    // pivot swaps
    for (j; j<=r; j++) {
      if (A[j] <= p) {
        _x = A[i];
        _y = A[j];
        A[i] = _y;
        A[j] = _x;
        i++;
      }
    }

    // swap the pivot
    _x = A[l];
    _y = A[i-1];
    A[l] = _y;
    A[i-1] = _x;

    partition(method, A, l, i-2);
    partition(method, A, i, r);

    return A;
  }

  function preprocessPivot(method, A, l, r) {
    let _x, _y;

    switch (method) {
      case 'first': return A;
      case 'last':
        _x = A[l];
        _y = A[r];
        A[l] = _y;
        A[r] = _x;
        return A;
    }
  }
}

module.exports = quickSort;
