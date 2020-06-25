/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (arr, queryNum) {
  const len = arr.length;
  let i, high, low, highIndex, lowIndex;
  // search for the first pair where arr[n] > arr[n+1]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      [high, low, highIndex, lowIndex] = [arr[i], arr[i + 1], i, i + 1];
    }
  };
  if (!(queryNum >= low && high >= queryNum)) {
    console.log(null);
    console.log('\n');
  } else {
    if ((len - queryNum) <= lowIndex) {
      console.log(`${arr[lowIndex - (len - queryNum)]}\n`);
      return arr[lowIndex - (len - queryNum)];
    } else {
      console.log(`${arr[lowIndex + queryNum]}\n`);
      return arr[len - queryNum];
    };
  };
};

