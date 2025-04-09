function reverseVowels(s: string): string {
  const vowelsSet = new Set("aeiouAEIOU");
  let words = s.split("");
  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    // Skip non-vowel characters
    while (left < right && !vowelsSet.has(words[left])) left++;
    while (left < right && !vowelsSet.has(words[right])) right--;

    // Swap vowels
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }

  return words.join("");
}
