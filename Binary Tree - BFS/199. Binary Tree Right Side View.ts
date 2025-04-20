function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  let queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const nextQueue: TreeNode[] = [];

    for (const node of queue) {
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }

    // Always push the rightmost node's value at this level
    res.push(queue[queue.length - 1].val);

    queue = nextQueue;
  }

  return res;
}
