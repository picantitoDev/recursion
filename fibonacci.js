// console.log(factorial(5))

function sumRange(num) {
  if (num == 1) return 1
  return num + sumRange(num - 1)
}

function power(base, exp) {
  if (exp == 0) return 1
  return base * power(base, exp - 1)
}

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

function all(array, callback) {
  if (array.length === 0) {
    return true
  }

  if (array.length === 1) {
    return callback(array[0])
  }

  return callback(array[0]) && all(array.slice(1), callback)
}

const allAreLessThanSeven = all([4, 3, 2], function (num) {
  return num < 7
})

//  if (num == 1) return 1
//return num + sumRange(num - 1)

function productOfArray(array) {
  if (array.length === 0) {
    return 1
  }
  return array.shift() * productOfArray(array)
}
// console.log(productOfArray([1, 2, 3, 10]))

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
}

function contains(nestedObject, value) {
  for (var prop in nestedObject) {
    if (Object.prototype.hasOwnProperty.call(nestedObject, prop)) {
      if (
        typeof nestedObject[prop] === "object" &&
        nestedObject[prop] !== null
      ) {
        return contains(nestedObject[prop], value)
      }

      if (nestedObject[prop] === value) {
        return true
      }
    }
  }
  return false
}
// console.log(contains(nestedObject, 44)) // true
// console.log(contains(nestedObject, "foo"))

function totalIntegers(multiDimensionalArray, total = 0) {
  for (let int of multiDimensionalArray) {
    if (Array.isArray(int)) {
      total = totalIntegers(int, total)
    }

    if (typeof int === "number") {
      total++
    }
  }
  return total
}

function SumSquares(array, total = 0) {
  for (let int of array) {
    if (Array.isArray(int)) {
      total = SumSquares(int, total)
    }

    if (typeof int === "number") {
      total += power(int, 2)
    }
  }
  return total
}

// console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]))
// var l = [1, 2, 3]
// console.log(SumSquares(l)) // 1 + 4 + 9 = 14

// l = [[1, 2], 3]
// console.log(SumSquares(l)) // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]]
// console.log(SumSquares(l)) // 1 = 1

// l = [10, [[10], 10], [10]]
// console.log(SumSquares(l)) // 100 + 100 + 100 + 100 = 400

function replicate(repetitions, num, arr = []) {
  if (repetitions < 0) {
    return []
  }

  if (repetitions === 0) {
    return arr
  }
  arr.push(num)
  return replicate(--repetitions, num, arr)
}
console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []
