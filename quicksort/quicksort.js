/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
	if (array.length <= 1) { 
		return array;
	} else {
		var left = [];
		var right = [];
		var newArray = [];
		var pivot = array.pop();
		for (var i = 0; i < array.length; i++) {
			if (array[i] <= pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}
		return newArray.concat(quicksort(left), pivot, quicksort(right));
	}
};