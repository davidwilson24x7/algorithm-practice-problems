/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


var allAnagrams = function(string){
  if (string) {
    return Array.from(string).reduce((anagrams, char, i) => {
      let remainder = allAnagrams(string.slice(0, i) + string.slice(i + 1));
      for (const rest of remainder) {
        let anagram = char + rest;
        if (!anagrams.includes(anagram)) {
          anagrams.push(anagram);
        }
      }
      return anagrams;
    }, Array());
  }
  return Array('');
};




