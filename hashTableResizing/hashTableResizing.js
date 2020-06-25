/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1

var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value){
    size++;
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var temp = storage[index];
    if (temp) {
      // if value is already in the temp then update it
      for (var i = 0; i < temp.length; i++) {
        if (temp[i][0] === key) {
          temp[i][1] = value;
        }
      }
      // the value is not in the temp then insert it
      temp.push([key, value]);
    } else {
      // no temp at the storage location
      storage[index] = [];
      storage[index].push([key, value]);
    }
    if (size / storageLimit >= 0.75) {
      result.resize(storageLimit * 2);
    }
  };


  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var temp = storage[index];
    if (temp) {
      for (var i = 0; i < temp.length; i++) {
        // Does the value match
        if (temp[i][0] === key) {
          // We have found the value in the temp
          return temp[i][1];
        }
      }
    }
    return undefined;
  };

  result.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var temp = storage[index];
    if (temp) {
      for (var i = 0; i < temp.length; i++) {
        if (temp[i][0] === key) {
          // Found the value so decrease size by 1
          size--;
          temp.splice(i, 1);
        }
      }
    }
    if (size / storageLimit <= 0.25) {
      result.resize(storageLimit / 2);
    }
  };

  result.resize = function (newLimit) {
    // Keep a reference to the storage to reset it
    var oldStorage = storage;
    // Update the size limit of the storage
    storageLimit = newLimit;
    // Clear the storage
    storage = [];

    // Go through each temp in the storage
    for (var i = 0; i < oldStorage.length; i++) {
      var temp = oldStorage[i];
      if (temp) {
        // Reassign for each temp
        for (var j = 0; j < temp.length; j++) {
          var index = getIndexBelowMaxForKey(temp[j][0], storageLimit);
          var newTemp = storage[index];
          if (newTemp) {
            newTemp.push([temp[j][0], temp[j][1]]);
          } else {
            newTemp = [];
            newTemp.push([temp[j][0], temp[j][1]]);
          }
        }
      }
    }
  };
  return result;
};