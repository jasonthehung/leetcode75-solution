/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // Node to be deleted found

    // Case 1: No left child
    if (!root.left) return root.right;

    // Case 2: No right child
    if (!root.right) return root.left;

    // Case 3: Node with two children
    const minNode = findMin(root.right);
    root.val = minNode.val; // Replace with inorder successor's value
    root.right = deleteNode(root.right, minNode.val); // Delete the inorder successor
  }

  return root;
}

function findMin(node: TreeNode): TreeNode {
  while (node.left) {
    node = node.left;
  }
  return node;
}
