function increasingTriplet(nums: number[]): boolean {
  let i = Infinity;
  let j = Infinity;

  for (const num of nums) {
    if (num <= i) {
      i = num;
    } else if (num <= j) {
      j = num;
    } else {
      return true;
    }
  }

  return false;
}
