export const isSubset = ([first, second]) => second.split('').every(e => first.includes(e))
