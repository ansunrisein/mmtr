export const isSubset = ([first, second]) =>
  second.split('').every(e => new RegExp(`${e}`, 'i').test(first))
