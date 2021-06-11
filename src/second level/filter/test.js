import {filter} from '.'

describe('filter', () => {
  it('should return same array if true constant function is passed', function () {
    expect(filter([1, 2], () => true)).toEqual([1, 2])
  })

  it('should call fn on array elements with element, index and array', () => {
    const fn = jest.fn()
    filter([1], fn)
    expect(fn).toBeCalledWith(1, 0, [1])
  })

  it('should return same array if identity function is passed', () => {
    const arr = [1, 2, 3]
    expect(filter(arr, e => e)).toEqual(arr)
  })

  it('should not mutate initial array', () => {
    const arr = [1, 2, 3]
    const newArr = filter(arr, e => e > 1)
    expect(newArr).not.toEqual(arr)
  })

  test.each([
    [['', false, undefined, 'meow'], e => !!e, ['meow']],
    [[2, 2, 2], e => e === 2, [2, 2, 2]],
    [[{a: 'a'}, {a: 'b'}, {a: 'a'}], e => e.a === 'a', [{a: 'a'}, {a: 'a'}]],
  ])('should return filtered array', (array, fn, result) => {
    expect(filter(array, fn)).toEqual(result)
  })
})
