export const filter = (arr, f) => {
  const newArr = []
  for (let i = 0; i < arr.length; ++i) {
    if (f(arr[i], i, arr)) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
