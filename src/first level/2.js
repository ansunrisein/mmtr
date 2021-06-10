export const getLongestWord = str =>
  str.split(' ').reduce((acc, e) => (e.length >= acc.length ? e : acc), '')
