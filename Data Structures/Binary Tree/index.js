class Node {
  constructor(info, left, right) {
    this.info = info;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(info) {
    const node = this.root; // Start from the root node
    if (node === null) {
      this.root = new Node(info, null, null);
      return;
    } else {
      const searchTree = function (node) {
        if (info < node.info) {
          if (node.left === null) {
            node.left = new Node(info, null, null);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (info > node.info) {
          if (node.right === null) {
            node.right = new Node(info, null, null);
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.info;
  }

  findMax() {
    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.info;
  }

  find(info) {
    let currentNode = this.root;
    while (currentNode.info !== info) {
      if (info > currentNode.info) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
      if (currentNode === null) return null;
    }
    return currentNode;
  }

  isPresent(info) {
    let currentNode = this.root;
    while (currentNode) {
      if (info > currentNode.info) {
        currentNode = currentNode.right;
      } else if (info < currentNode.info) {
        currentNode = currentNode.left;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(info) {
    const removeNode = (node, info) => {
      if (node === null) {
        return null;
      }
      if (info === node.info) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          template = tempNode.left;
        }
        node.info = tempNode.info;
        node.right = removeNode(node.right, tempNode.info);
        return node;
      } else if (info < node.info) {
        node.left = removeNode(node.left, info);
        return node;
      } else {
        node.right = removeNode(node.right, info);
        return node;
      }
    };
    this.root = removeNode(this.root, info);
  }

  preOrderTraversal() {
    const node = this.root;
    if (node === null) {
      return [];
    } else {
      const visit = (node, acc = []) => {
        if (node) {
          acc.push(node.info);
          if (node.left) visit(node.left, acc);
          if (node.right) visit(node.right, acc);
        }
        return acc;
      };
      return visit(node);
    }
  }

  inOrderTraversal() {
    const node = this.root;
    if (node === null) {
      return [];
    } else {
      const visit = (node, acc = []) => {
        if (node) {
          if (node.left) visit(node.left, acc);
          acc.push(node.info);
          if (node.right) visit(node.right, acc);
        }
        return acc;
      };
      return visit(node);
    }
  }

  postOrderTraversal() {
    const node = this.root;
    if (node === null) {
      return [];
    } else {
      const visit = (node, acc = []) => {
        if (node) {
          if (node.left) visit(node.left, acc);
          if (node.right) visit(node.right, acc);
          acc.push(node.info);
        }
        return acc;
      };
      return visit(node);
    }
  }
}

const bst1 = new BinaryTree();
bst1.add(10);
bst1.add(20);
bst1.add(5);
bst1.add(11);
bst1.add(-2);
bst1.add(8);
bst1.add(21);
bst1.remove(21);
console.log(bst1);
console.log("Root node: ", bst1.root);
console.log("pre order traversal: ", bst1.preOrderTraversal());
console.log("in order traversal: ", bst1.inOrderTraversal());
console.log("post order traversal: ", bst1.postOrderTraversal());
