//A tree is a hierarchical data structure composed of nodes. 
// Each node has a value and a list of references to its child nodes


//Step 1: Define the Node class.
class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

//Step 2: Define the Tree class.
class Tree {
    constructor(root = null) {
        this.root = root;
    }

    //adding tree node
    add(value, parentValue) {
        const newNode = new TreeNode(value);
        // This condition checks if the tree is empty. If the root property of the tree is null, 
        // it means the tree is empty, and we set the root to the new node (newNode) we just created
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        this._traverseAndAdd(this.root, newNode, parentValue);
    }

    //This method is a helper function used internally by the add method 
    // to traverse the tree recursively and find the node 
    // with the specified parentValue to which the new node will be added as a child.
    _traverseAndAdd(node, newNode, parentValue) {
        //This condition checks if the value property of the current node (node) matches the 
        // parentValue we are looking for. 
        // If it does, it means we have found the parent node to which the new node should be added
        if (node.value === parentValue) {
            node.children.push(newNode);
            return;
        }
        //If the current node is not the parent node we are looking for, 
        // we need to continue traversing the tree recursively. 
        // This loop iterates over each child node of the current node (node)
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            this._traverseAndAdd(child, newNode, parentValue);
        }
    }

    print() {
        this._traverseAndPrint(this.root, 0);
    }

    _traverseAndPrint(node, depth) {
        //This condition checks if the current node (node) is null. If it is, 
        // it means we've reached the end of a branch in the tree, so we simply return without printing anything.
        if (node === null) {
            return;
        }
        //This line prints the value of the current node (node.value) 
        // with indentation proportional to its depth (" ".repeat(depth)). 
        // This creates a visual representation of the node's position in the tree
        console.log(" ".repeat(depth) + node.value);
        //This loop iterates over each child node of the current node (node). 
        // For each child node, the _traverseAndPrint method is called recursively
        //with the child node and an increased depth level (depth + 2). 
        // This ensures that child nodes are printed with increased indentation, making them visually appear as descendants of their parent node.
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            this._traverseAndPrint(child, depth + 2);
        }
    }
}


//usage

const myTree = new Tree();

myTree.add("A", null); // Adding root node
myTree.add("B", "A");  // Adding child node B to A
myTree.add("C", "A");  // Adding child node C to A
myTree.add("D", "B");  // Adding child node D to B
myTree.add("E", "B");  // Adding child node E to B

// Print the tree
myTree.print();