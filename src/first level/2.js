export const getLongestWordLength = str =>
  str.split(' ').reduce((acc, e) => Math.max(e.length, acc), 0)
