/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // return my value as english words
  var digits = this.toString().length;
  var arr  = [];
  for (var i = digits ; i > 0; i -= 3){
    var tempIndex = i - 3;
    if (tempIndex < 0) {
      tempIndex = 0;
    }
  var tempArr = this.toString().slice(tempIndex, i);
    arr.push(tempArr);
  }
  console.log(arr);
  var stringArr = [];
  for (var j = 0; j < arr.length; i++) {
    if (arr[j].length === 3) {
      stringArr.push([numbersToWords[arr[j][0]], numbersToWords[arr[j][1]], numbersToWords[arr[j][2]] ]);
    } else if (arr[j].length === 2) {
      stringArr.push([numbersToWords[arr[j][0]], numbersToWords[arr[j][1]] ]);
    } else {
      stringArr.push([numbersToWords[arr[j][0]] ]);
    }
  }
  console.log(stringArr);
  return [].concat.apply([], stringArr);
};
