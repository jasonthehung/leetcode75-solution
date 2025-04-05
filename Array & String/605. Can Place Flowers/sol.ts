function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if the current plot is empty and the adjacent plots are empty or boundaries
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1; // Plant a flower here
      n--; // Decrease the number of flowers needed
    }

    if (n <= 0) return true; // Early exit if all flowers are planted
  }

  return n <= 0; // If we managed to plant enough flowers, return true
}
