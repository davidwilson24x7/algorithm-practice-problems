/**
 * Given a string representation of a 2d map, return the number of islands in the map. 
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  let mapArr = [];
  mapStr.split('\n').forEach(function (line) {
  mapArr.push(line.split(''));
  });
  let cnt = 0;
  mapArr.forEach(function (line, i) {
  line.forEach(function (item, j) {
  if (item === '0') {
  cnt++;
  destroyConnected(i, j);
  }
  });
  });
  function destroyConnected (in1, in2) {
  mapArr[in1][in2] = '.';
  if (in1 > 0) {
  if (mapArr[in1 - 1][in2] === '0') { destroyConnected(in1 - 1, in2); }
  }
  if (in2 > 0) {
  if (mapArr[in1][in2 - 1] === '0') { destroyConnected(in1, in2 - 1); }
  }
  if (in1 < mapArr.length - 1) {
  if (mapArr[in1 + 1][in2] === '0') { destroyConnected(in1 + 1, in2); }
  }
  if (in1 < mapArr[in1].length - 1) {
  if (mapArr[in1][in2 + 1] === '0') { destroyConnected(in1, in2 + 1); }
  }
  }
  return cnt;
}
