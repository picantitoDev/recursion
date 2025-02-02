function fibs(n, arr = []) {
  let a = 0
  let b = 1
  let count = 0
  while (count < n) {
    arr.push(a)
    let c = a + b
    a = b
    b = c
    count++
  }
  return arr
}

function fibsRec(n, a = 0, b = 1, count = 0, arr = []) {
  if (count === n) {
    return arr
  }
  arr.push(a)
  return fibsRec(n, b, a + b, count + 1, arr)
}

console.log(fibs(24))
console.log(fibsRec(24))

/* JS Interview Prep (My solutions)
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

  function productOfArray(array) {
    if (array.length === 0) {
      return 1
    }
    return array.shift() * productOfArray(array)
  }

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

  function replicate(repetitions, num, arr = []) {
    if (repetitions < 0) {
      return []
    }

    if (repetitions === 0) {
      return arr
    }
    arr.push(num)
    return replicate(repetitions - 1, num, arr)
  }

*/
