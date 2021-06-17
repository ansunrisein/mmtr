export const removeEqual = (arr, ...args) => arr.filter(e => ![...args].includes(e))
