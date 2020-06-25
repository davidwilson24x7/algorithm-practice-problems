/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  var array = [];
  var array2 = [];
  var merge = ''

  var node1 = list1.value;
  var node2 = list2.value;
  

  array.push(node1) 
  array.push(node2)
  
  
  while(list1.next !== null) {
    array.push(list1.next.value)
    list1.next = list1.next.next;
  }
  
  while(list2.next !== null) {
    array2.push(list2.next.value)
    list2.next = list2.next.next;
  }
  
  for(var i = 0; i < array.length; i++) {
    if (array2.indexOf(array[i]) > -1) {
      merge += array[i]
      break
    }
  }
return merge
}
