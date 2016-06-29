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

    if ((r-l) < 1) { return A; }

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
      case 'first':
        break;
      case 'last':
        _x = A[l];
        _y = A[r];
        A[l] = _y;
        A[r] = _x;
        break;
      case 'median':
        let length = r - l + 1;
        let k;

        if (length % 2 === 0) {
          k = (length / 2) - 1 + l;
        } else {
          k = Math.floor(length / 2) + l;
        }

        let z = medianPivotIndex(A, l, k, r);

        _x = A[l];
        _y = A[z];
        A[l] = _y;
        A[z] = _x;
        break;
    }

    return A;
  }

  function medianPivotIndex(A, l, k, r) {
    switch (true) {
      case l === k && l === r:
      case A[l] === A[k] && A[l] === A[r]:
        return l;
      case l === k:
        return A[l] < A[r] ? l : r;
      case l === r:
        return A[l] < A[k] ? l : k;
      case A[l] > A[k] && A[k] > A[r]:
      case A[l] < A[k] && A[k] < A[r]:
        return k;
      case A[l] > A[r] && A[r] > A[k]:
      case A[l] < A[r] && A[r] < A[k]:
        return r;
      default:
        return l;
    }
  }
}

module.exports = quickSort;
