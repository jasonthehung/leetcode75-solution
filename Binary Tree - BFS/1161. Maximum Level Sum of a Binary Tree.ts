function maxLevelSum(root: TreeNode | null): number {
  if (!root) return 0;

  let maxSum = -Infinity;
  let maxLevel = 0;
  let level = 0;

  let queue: TreeNode[] = [root];
  while (queue.length > 0) {
    level++;
    const curLevelSize = queue.length;
    let levelSum = 0;

    for (let i = 0; i < curLevelSize; i++) {
      const node = queue.shift()!;
      levelSum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (levelSum > maxSum) {
      maxSum = levelSum;
      maxLevel = level;
    }
  }

  return maxLevel;
}
