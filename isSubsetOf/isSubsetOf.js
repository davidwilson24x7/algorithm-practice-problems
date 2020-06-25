/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  var obj = objectify(arr);
  console.log(obj)
    return this.reduce(function(acc, key) {
      if (!obj[key]) {
        return false;
      }
      return acc;
    }, true);
  
    function objectify(arr) {
      var obj = {};
      console.log(arr)
      arr.forEach(function(key) {
        obj[key] = 1; // if there is repeated [key] it overwrites
      });
      return obj;
    }
};
