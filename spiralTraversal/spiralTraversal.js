/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  var width = matrix[0].length - 1;
  var height = matrix.length;
  var newMatrix = [];
  var firstRow = matrix[0];

  if (matrix.length === 1) {
    return matrix[0];
  }

  for (width; width >= 0; width--) {
    var rotatedCol = [];
    for (var row = 1; row < height; row++) {
      rotatedCol.push(matrix[row][width]);
    }
    newMatrix.push(rotatedCol);
  }

  firstRow.push.apply(firstRow, spiralTraversal(newMatrix));

  return firstRow;
};
