function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;

  // Calculate the initial window sum
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;

  // Slide the window across the array
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];

    max = Math.max(max, sum);
  }

  return max / k;
}
