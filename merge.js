function mergeSort(arr = []) {
  if (arr.length <= 1) {
    return arr
  }

  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  let sortedLeft = mergeSort(left)
  let sortedRight = mergeSort(right)
  return merge(sortedLeft, sortedRight)
}

function merge(left, right, result = []) {
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      result.push(right[j])
      j++
    } else {
      result.push(left[i])
      i++
    }
  }

  while (i < left.length) {
    result.push(left[i])
    i++
  }
  while (j < right.length) {
    result.push(right[j])
    j++
  }
  return result
}

console.log(mergeSort([105, 79, 100, 110]))
