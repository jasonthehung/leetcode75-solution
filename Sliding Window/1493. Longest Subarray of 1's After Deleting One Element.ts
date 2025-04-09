function longestSubarray(nums: number[]): number {
  let maxLen = 0;
  let zeroIndex = -1; // To track the most recent zero's index
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      start = zeroIndex + 1; // Move start to just after the previous zero
      zeroIndex = i; // Update zero's index to the current position
    }
    maxLen = Math.max(maxLen, i - start);
  }

  return maxLen;
}
