// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root || root.val === val) return root;

  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while (root) {
    if (root.val === val) return root;

    root = val < root.val ? root.left : root.right;
  }

  return null;
}
