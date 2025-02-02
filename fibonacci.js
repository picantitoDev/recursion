console.log(sumRangeRec(3))

function sumRangeRec(n, sum = 0) {
  if (n === 1) {
    return sum + 1
  }
  return sumRangeRec(n - 1, sum + n)
}

// sumRangeRec(3, sum = 0) = 6
// sumRangeRec(2, sum = 3) = 6
// sumRangeRec(1, sum = 5) -> sum + 1 = 6
