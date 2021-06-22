Array.prototype.myMap = function (f) {
  const newArr = []
  for (let i = 0; i < this.length; ++i) {
    newArr[i] = f(this[i], i, this)
  }
  return newArr
}

Array.prototype.myEvery = function (f) {
  for (let i = 0; i < this.length; ++i) {
    if (!f(this[i], i, this)) {
      return false
    }
  }
  return true
}

Array.prototype.myFilter = function (f) {
  const newArr = []
  for (let i = 0; i < this.length; ++i) {
    if (f(this[i], i, this)) {
      newArr.push(this[i])
    }
  }
  return newArr
}

Array.prototype.myFind = function (f) {
  for (let i = 0; i < this.length; ++i) {
    if (f(this[i], i, this)) {
      return this[i]
    }
  }
}

Array.prototype.mySome = function (f) {
  for (let i = 0; i < this.length; ++i) {
    if (f(this[i], i, this)) {
      return true
    }
  }
  return false
}
