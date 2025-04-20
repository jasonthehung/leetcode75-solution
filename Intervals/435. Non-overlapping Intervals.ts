function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  let remove = 0;
  let end = intervals[0][1]; // End of the first interval

  for (let i = 1; i < intervals.length; i++) {
    const [start, currEnd] = intervals[i];

    if (start < end) {
      // Overlap detected — remove one with larger end time
      remove++;
      end = Math.min(end, currEnd);
    } else {
      // No overlap — update end
      end = currEnd;
    }
  }

  return remove;
}
