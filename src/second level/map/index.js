export const map = (arr, f) => {
  const newArr = []
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = f(arr[i], i, arr)
  }
  return newArr
}
