export const whatIsInAName = (arr, obj) =>
  arr.filter(e =>
    Object.keys(obj)
      .map(key => e[key] === obj[key])
      .every(e => !!e),
  )
