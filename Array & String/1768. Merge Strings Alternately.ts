function mergeAlternately(word1: string, word2: string): string {
  // Create an array to hold the merged characters
  const res: string[] = [];

  // Calculate the length of the shorter word
  const minLen = Math.min(word1.length, word2.length);

  // Iterate through both words and add characters alternately
  for (let i = 0; i < minLen; i++) {
    res.push(word1[i], word2[i]);
  }

  // Add the remaining characters from the longer word
  res.push(word1.slice(minLen), word2.slice(minLen));

  // Join the array into a string and return it
  return res.join("");
}
