export const find = (arr, f) => {
  for (let i = 0; i < arr.length; ++i) {
    if (f(arr[i], i, arr)) {
      return arr[i]
    }
  }
}
