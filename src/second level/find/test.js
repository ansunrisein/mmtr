import {find} from '.'

describe('find', () => {
  it('should call fn on array elements with element, index and array', () => {
    const fn = jest.fn()
    find([1], fn)
    expect(fn).toBeCalledWith(1, 0, [1])
  })

  test.each([
    [[2, 4, 1], e => e % 2, 1],
    [['str', 'a', 'b'], e => e.length === 1, 'a'],
    [[true, false, true], e => !e, false],
  ])('should return first found element', (arr, func, result) => {
    expect(find(arr, func)).toEqual(result)
  })
})
