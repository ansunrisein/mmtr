export const getBiggestNum = arr => arr.map(e => e.reduce((acc, e) => Math.max(acc, e)))
