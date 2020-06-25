
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function() {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
 Tree.prototype.getClosestCommonAncestor = function(node1, node2) {
  let path1= this.getAncestorPath(node1);
console.log(path1);
let path2 = this.getAncestorPath(node2);
console.log(path2);
if (path1 === null || path2 === null) {
  return null;
}
let longestPath = 0;
if (path1.length > path2.length) {
  longestPath = path1.length;
  for (let i = longestPath - 1; i > -1; i--) {
    if (path2.indexOf(path1[i]) !== -1) {
      return path[i];
    }
  }
  return null;
} else {
  longestPath = path2.length;
  for (let i = longestPath - 1; i  > -1; i--) {
    if (path1.indexOf(path2[i]) !== -1) {
      console.log('+++line 39 ', path2[i]);
      return path2[i];
    }
  }
  return null;
}
}

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
 Tree.prototype.getAncestorPath = function(target){
  var results = [];

  function recurse(node, nodeArray) {
    //traverse the entire tree
    //push in every path to results
    //return the path that has the person in it
    if(node.children.length === 0) {
      results.push(nodeArray);
      return;
    } else {
      for(var i = 0; i < node.children.length; i++) {
        nodeArray.push(node.children[i]);
        recurse(node.children[i], nodeArray);
        nodeArray = [this];
      }
    }
  }
  recurse(this, [this]);

  for(var j = 0; j < results.length; j++) {
    if(results[j].includes(person)) {
      return results[j];
    }
  }
  return null;
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
