function maxOperations(nums: number[], k: number): number {
  const freqMap = new Map<number, number>();
  let count = 0;

  for (const num of nums) {
    const complement = k - num;

    if (freqMap.has(complement)) {
      count++;
      const complementCount = freqMap.get(complement)!;

      if (complementCount === 1) {
        freqMap.delete(complement);
      } else {
        freqMap.set(complement, complementCount - 1);
      }
    } else {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  }

  return count;
}
