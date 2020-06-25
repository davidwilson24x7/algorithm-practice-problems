/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {

    if ( Array.isArray(array) && typeof target === 'number' ) {
        var length   = array.length;
        var mid      = Math.floor( length / 2 );
        var midValue = array[mid];
        var left     = array.slice(0, mid);
        var right    = array.slice(mid + 1);
        var result   = 0;
    
        if (length === 0) {
          return null;
        } else if ( midValue === target ) {
          return mid;
        } else if ( midValue > target ) {
          return binarySearch( left, target );
        } else {
          var temp = binarySearch( right, target );
          return temp === null ? temp : mid + temp + 1;
        }
      }
};

