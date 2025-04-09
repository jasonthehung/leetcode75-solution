function longestOnes(nums: number[], k: number): number {
  let maxOnes = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) k--;

    // If we have more than 'k' zeros, move 'start' to the right
    if (k < 0) {
      if (nums[start] === 0) k++;

      start++;
    }

    // Calculate the max length of the subarray
    maxOnes = Math.max(maxOnes, end - start + 1);
  }

  return maxOnes;
}
