const numericOperators = ["+", "-", "*", "/"];

const Calculate = (node) => {
  let result;
  if (!numericOperators.includes(node)) {
    result = node;
    return result;
  } else {
    let leftChild = Calculate(node.left);
    let rightChild = Calculate(node.right);
    result = eval(leftChild + node + rightChild);
    return result;
  }
};
