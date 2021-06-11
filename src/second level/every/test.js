import {every} from '.'

describe('every', () => {
  it('should call fn on array elements with element, index and array', () => {
    const fn = jest.fn()
    every([1], fn)
    expect(fn).toBeCalledWith(1, 0, [1])
  })

  test.each([
    [[1, 2, 3], e => !!e, true],
    [['a', 'aaaa', 'anbv'], str => /.*\a/g.test(str), true],
  ])('should return true if fn return true on every element', (arr, fn, result) => {
    expect(every(arr, fn)).toEqual(result)
  })

  test.each([
    [[1, 2, NaN], e => !!e, false],
    [['a', 'aaaa', 'nbv'], str => /.*\a/g.test(str), false],
  ])('should return false if fn return false one at least one element', (arr, fn, result) => {
    expect(every(arr, fn)).toEqual(result)
  })
})
