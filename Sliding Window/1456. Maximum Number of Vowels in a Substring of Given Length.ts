function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  // Count vowels in the first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) count++;
  }

  let max = count;

  // Slide the window
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (vowels.has(s[i - k])) count--;

    max = Math.max(max, count);
  }

  return max;
}
