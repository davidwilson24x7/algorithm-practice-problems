/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

var checkStr = (str) => {
  var check = true; 
  var check0To9 = (num) => {
    return (num % 1 === 0 && (num>0 && num<=9))? true: false; 
  }
  var numSplit = str.split(''); 
  numSplit.reduce((memo,curr,index,array) => {
         if(!check0To9(Number(curr))){check = false; return check}
         else{
             memo = array.slice(index+1); 
           if(memo.indexOf(curr)!==-1) {check = false; 
           return check}
           }
       },[])
  return check; 
}

function rotateMatrix (matrix) {
var result = [], end = matrix.length-1, start = 0;
while(start<=end) {
  var holder = []; 
  for(var i=end;i>=0;i--) {
    holder.push(matrix[i][start]); 
  }
  result.push(holder); 
  start ++; 
}
result = mapIt(result); 
return result; 
}

var mapIt = (arr) => {
  return arr.map(subArr => subArr.join('')); 
}

function sudokuChecker(board) {
  // Your code here.
  var split =boardStr.split('\n'); 
  var check = true; 
  
  var checker = (matrix) => {
    var rotate = rotateMatrix(matrix); 
  
    for(var i=0;i<matrix.length;i++){
        // console.log('matrix',matrix[i].split(''))
      if(!checkStr(matrix[i])) check = false; 
      if(!checkStr(rotate[i])) check= false; 
    }
  }
  checker(split); 
  
  var row=0, col=0; 
  var holder = []; 
  var subMatrix = []; 
  
  while(row<=6){
    while(col<=6){
      for(var j=row;j<row+3;j++) {
        if(split[j])
        holder.push(split[j].slice(col,col+3)); 
      }
      col+=3; 
      // console.log('start',start,'end',end,'split[j]',split[j]); 
      }
      col=0; 
      row+=3; 
  }
  
  var start=0, end = 3; 
  
  while(end<holder.length+3){
    subMatrix.push(holder.slice(start,end)); 
    start+=3; end+=3; 
  }
  
  subMatrix = mapIt(subMatrix); 
  subMatrix.forEach(str => {
     if(!checkStr(str)){
       check = false; 
     }
  })
  return check? 'solved':'invalid'; 
}
