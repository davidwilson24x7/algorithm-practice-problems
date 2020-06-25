/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  var stringArr = string.split("");
  var repeatedChars = ['empty',0];
  var longestRepeatedChar = [0,0];
  for(var i = 0; i < stringArr.length; i++) {
    if(stringArr[i] === stringArr[i + 1]) {
      if(repeatedChars[0] === 'empty') {
        repeatedChars[0] = i;//from w w w.  j  av  a2 s .  c  om
      }
    } else if(repeatedChars[0] !== 'empty') {
      repeatedChars[1] = i;
      console.log('repeated ', repeatedChars, 'longest ', longestRepeatedChar);
      if(repeatedChars[1] - repeatedChars[0] > longestRepeatedChar[1] - longestRepeatedChar[0]) {
        longestRepeatedChar[0] = repeatedChars[0];
        longestRepeatedChar[1] = repeatedChars[1];
        repeatedChars[0] = 'empty';
        repeatedChars[1] = 0;
      }
    }
  }
  return longestRepeatedChar;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
