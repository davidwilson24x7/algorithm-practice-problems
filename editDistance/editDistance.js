// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Your code here.
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= str1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= str2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (str1.charAt(i - 1) != str2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[str2.length] = lastValue;
  }
  return costs[str2.length];
}
