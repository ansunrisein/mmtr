export const moveElements = (first, second, n) => [
  ...second.slice(0, n),
  ...first,
  ...second.slice(n, second.length),
]
