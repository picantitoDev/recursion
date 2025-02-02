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
console.log(productOfArray([1, 2, 3, 10]))

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
console.log(contains(nestedObject, 44)) // true
console.log(contains(nestedObject, "foo"))
// console.log(allAreLessThanSeven) // false

/*
fact(4) → 4 * fact(3) 
fact() → 2 * power(2, 3-1) 
fact() → 2 * power(2, 2-1)
fact() → 2 * power(2, 1-1)
*/
