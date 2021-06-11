import {map} from '.'

describe('map', () => {
  it('should call fn on array elements with element, index and array', () => {
    const fn = jest.fn()
    map([1], fn)
    expect(fn).toBeCalledWith(1, 0, [1])
  })

  it('should return same array if identity function is passed', () => {
    const arr = [1, 2, 3]
    expect(map(arr, e => e)).toEqual(arr)
  })

  it('should not mutate initial array', () => {
    const arr = [1, 2, 3]
    const newArr = map(arr, e => e + 3)
    expect(newArr).not.toEqual(arr)
  })

  test.each([
    [[1, 2], e => e + 1, [2, 3]],
    [[123, 123, 123], String, ['123', '123', '123']],
    [[1, 2, 3], (e, _, arr) => arr.reduce((acc, el) => acc + el, e), [7, 8, 9]],
  ])('should apply function on every element', (array, func, result) => {
    expect(map(array, func)).toEqual(result)
  })
})
