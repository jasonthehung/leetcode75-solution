function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    const width = right - left;
    const area = width * Math.min(leftHeight, rightHeight);

    maxArea = Math.max(maxArea, area);

    // Move the shorter line inward
    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
