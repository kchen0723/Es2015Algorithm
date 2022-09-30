class TreeNode{
  NodeValue;
  Left;
  Right;
  Parent;

  constructor(value){
    this.NodeValue = value;
  }
}

testTreeNode();
function testTreeNode(){
  var root = new TreeNode(9);

  var sevenNode = new TreeNode(7);
  sevenNode.Parent = root;
  root.Left = sevenNode;

  var sixNode = new TreeNode(6);
  sixNode.Parent = sevenNode;
  sevenNode.Left = sixNode;

  var threeNode = new TreeNode(3);
  var twoNode = new TreeNode(2);
  sixNode.Left = twoNode;
  sixNode.Right = threeNode;
  twoNode.Parent = sixNode;
  threeNode.Parent = sixNode;

  var result = findInOrderNext(threeNode);
  console.log(result);
}

function findInOrderNext(currentNode){
  if(currentNode === undefined){
    return;
  }

  if(currentNode.Right){
    return findNextWhileRightIsNotNull(currentNode);
  } else {
    return findNextWhileRightIsNull(currentNode);
  }
}

function findNextWhileRightIsNotNull(currentNode){
  var current = currentNode.Right;
  var previous = currentNode.Right;
  while(current){
    previous = current;
    current = current.Left;
  }
  return previous;
}

function findNextWhileRightIsNull(currentNode){
  if(!currentNode.Parent){
    return undefined;
  }
  var current = currentNode;
  var previous = currentNode;
  while(current && current.NodeValue <= currentNode.Parent.NodeValue){
    previous = current;
    current = current.Parent;
  }
  if(current && current.NodeValue > currentNode.NodeValue){
    return current;
  }
  return undefined;
}