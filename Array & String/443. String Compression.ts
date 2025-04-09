function compress(chars: string[]): number {
  let index = 0;
  let insert = 0;

  while (index < chars.length) {
    let curChar = chars[index];
    let count = 0;

    while (index < chars.length && curChar === chars[index]) {
      index++;
      count++;
    }

    chars[insert++] = curChar;

    if (count > 1) {
      for (const digit of count.toString()) {
        chars[insert++] = digit;
      }
    }
  }

  return insert;
}
