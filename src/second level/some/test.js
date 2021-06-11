import {some} from '.'

describe('some', () => {
  it('should call fn on array elements', () => {
    const fn = jest.fn()
    some([1, 2], fn)
    expect(fn).toBeCalled()
  })

  it('should call fn on array elements with element, index and array', () => {
    const fn = jest.fn()
    some([1], fn)
    expect(fn).toBeCalledWith(1, 0, [1])
  })

  test.each([
    [[1, 2, 3], e => !!e, true],
    [['a', 'aaaa', 'anbv'], str => /.*\a/g.test(str), true],
    [[1, 2, NaN], e => !!e, true],
    [['a', 'aaaa', 'nbv'], str => /.*\a/g.test(str), true],
  ])('should return true if fn return true on at least one element', (arr, fn, result) => {
    expect(some(arr, fn)).toEqual(result)
  })

  test.each([
    [[NaN, NaN, NaN], e => !!e, false],
    [['b', 'bbbb', 'nbv'], str => /.*\a/g.test(str), false],
  ])('should return false if fn return false on all elements', (arr, fn, result) => {
    expect(some(arr, fn)).toEqual(result)
  })
})
