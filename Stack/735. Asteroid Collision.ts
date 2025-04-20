function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (const asteroid of asteroids) {
    let destroy = false;

    while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
      const top = stack[stack.length - 1];

      if (top > -asteroid) {
        destroy = true;
        break;
      } else if (top === -asteroid) {
        stack.pop(); // both destroy
        destroy = true;
        break;
      } else {
        stack.pop(); // top asteroid destroyed, keep checking
      }
    }

    if (!destroy) {
      stack.push(asteroid);
    }
  }

  return stack;
}
