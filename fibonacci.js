console.log(power(2, 3))

function sumRange(num) {
  if (num == 1) return 1
  return num + sumRange(num - 1)
}

function power(base, exp) {
  if (exp == 0) return 1
  return base * power(base, exp - 1)
}

/*
sumRange(2, 3) → 2 * power(2, 3-1) 
sumRange(2, 2) → 2 * power(2, 2-1)
sumRange(2, 1) → 2 * power(2, 1-1)
sumRange(2, 0) → 1 
*/
