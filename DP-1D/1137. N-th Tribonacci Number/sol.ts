function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n < 3) return 1;

  let [t0, t1, t2] = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    [t0, t1, t2] = [t1, t2, t0 + t1 + t2];
  }

  return t2;
}
