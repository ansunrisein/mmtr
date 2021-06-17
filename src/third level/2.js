export const joinArr = (first, second) => [
  ...first.filter(e => !second.includes(e)),
  ...second.filter(e => !first.includes(e)),
]
