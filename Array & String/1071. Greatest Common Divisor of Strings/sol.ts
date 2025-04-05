function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";

  // Using iteration instead of recursion for the GCD function because it avoids the overhead of function calls.
  const gcd = (a: number, b: number): number => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  return str1.slice(0, gcd(str1.length, str2.length));
}
