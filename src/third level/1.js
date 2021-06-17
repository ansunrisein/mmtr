export const sumArr = ([first, second]) =>
  Array(Math.abs(second - first - 1))
    .fill(0)
    .map((_, i) => Math.min(first, second) + i)
    .reduce((acc, e) => acc + e, 0)
