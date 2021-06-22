import './index'

describe('Array methods', () => {
  describe('map', () => {
    it('should call fn on array elements with element, index and array', () => {
      const fn = jest.fn()
      ;[1].myMap(fn)
      expect(fn).toBeCalledWith(1, 0, [1])
    })

    it('should return same array if identity function is passed', () => {
      const arr = [1, 2, 3]
      expect(arr.myMap(e => e)).toEqual(arr)
    })

    it('should not mutate initial array', () => {
      const arr = [1, 2, 3]
      const newArr = arr.myMap(e => e + 3)
      expect(newArr).not.toEqual(arr)
    })

    test.each([
      [[1, 2], e => e + 1, [2, 3]],
      [[123, 123, 123], String, ['123', '123', '123']],
      [[1, 2, 3], (e, _, arr) => arr.reduce((acc, el) => acc + el, e), [7, 8, 9]],
    ])('should apply function on every element', (array, func, result) => {
      expect(array.myMap(func)).toEqual(result)
    })
  })

  describe('every', () => {
    it('should call fn on array elements with element, index and array', () => {
      const fn = jest.fn()
      ;[1].myEvery(fn)
      expect(fn).toBeCalledWith(1, 0, [1])
    })

    test.each([
      [[1, 2, 3], e => !!e, true],
      [['a', 'aaaa', 'anbv'], str => /.*\a/g.test(str), true],
    ])('should return true if fn return true on every element', (arr, fn, result) => {
      expect(arr.myEvery(fn)).toEqual(result)
    })

    test.each([
      [[1, 2, NaN], e => !!e, false],
      [['a', 'aaaa', 'nbv'], str => /.*\a/g.test(str), false],
    ])('should return false if fn return false one at least one element', (arr, fn, result) => {
      expect(arr.myEvery(fn)).toEqual(result)
    })
  })

  describe('filter', () => {
    it('should return same array if true constant function is passed', function () {
      expect([1, 2].myFilter(() => true)).toEqual([1, 2])
    })

    it('should call fn on array elements with element, index and array', () => {
      const fn = jest.fn()
      ;[1].myFilter(fn)
      expect(fn).toBeCalledWith(1, 0, [1])
    })

    it('should return same array if identity function is passed', () => {
      const arr = [1, 2, 3]
      expect(arr.myFilter(e => e)).toEqual(arr)
    })

    it('should not mutate initial array', () => {
      const arr = [1, 2, 3]
      const newArr = arr.myFilter(e => e > 1)
      expect(newArr).not.toEqual(arr)
    })

    test.each([
      [['', false, undefined, 'meow'], e => !!e, ['meow']],
      [[2, 2, 2], e => e === 2, [2, 2, 2]],
      [[{a: 'a'}, {a: 'b'}, {a: 'a'}], e => e.a === 'a', [{a: 'a'}, {a: 'a'}]],
    ])('should return filtered array', (array, fn, result) => {
      expect(array.myFilter(fn)).toEqual(result)
    })
  })

  describe('find', () => {
    it('should call fn on array elements with element, index and array', () => {
      const fn = jest.fn()
      ;[1].myFind(fn)
      expect(fn).toBeCalledWith(1, 0, [1])
    })

    test.each([
      [[2, 4, 1], e => e % 2, 1],
      [['str', 'a', 'b'], e => e.length === 1, 'a'],
      [[true, false, true], e => !e, false],
    ])('should return first found element', (arr, func, result) => {
      expect(arr.myFind(func)).toEqual(result)
    })
  })

  describe('some', () => {
    it('should call fn on array elements', () => {
      const fn = jest.fn()
      ;[1, 2].mySome(fn)
      expect(fn).toBeCalled()
    })

    it('should call fn on array elements with element, index and array', () => {
      const fn = jest.fn()
      ;[1].mySome(fn)
      expect(fn).toBeCalledWith(1, 0, [1])
    })

    test.each([
      [[1, 2, 3], e => !!e, true],
      [['a', 'aaaa', 'anbv'], str => /.*\a/g.test(str), true],
      [[1, 2, NaN], e => !!e, true],
      [['a', 'aaaa', 'nbv'], str => /.*\a/g.test(str), true],
    ])('should return true if fn return true on at least one element', (arr, fn, result) => {
      expect(arr.mySome(fn)).toEqual(result)
    })

    test.each([
      [[NaN, NaN, NaN], e => !!e, false],
      [['b', 'bbbb', 'nbv'], str => /.*\a/g.test(str), false],
    ])('should return false if fn return false on all elements', (arr, fn, result) => {
      expect(arr.mySome(fn)).toEqual(result)
    })
  })
})
