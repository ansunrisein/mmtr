export const fillArray = (arr, n) => {
  if (n <= 0) {
    return arr
  }

  arr.push(n)
  return fillArray(arr, n - 1)
}

export const fillArrayPure = (n, arr = []) => (n <= 0 ? [] : [n, ...fillArrayPure(n - 1, arr)])
