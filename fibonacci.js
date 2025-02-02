console.log(factorial(5))

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

/*
fact(4) → 4 * fact(3) 
fact() → 2 * power(2, 3-1) 
fact() → 2 * power(2, 2-1)
fact() → 2 * power(2, 1-1)
*/
