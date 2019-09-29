function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false
  }
  if (a + b <= c) {
    return false
  }
  if (a + c <= b) {
    return false
  }
  if (b + c <= a) {
    return false
  }
  return true
}

var possibleTriangles = [
  [1, 1, 1],
  [3, 4, 5],
  [1, 2, 3],
  [5, 12, 13],
  [-1, -1, -1]
]

let boolArray = possibleTriangles.map(triangle => isTriangle(...triangle))
console.log(boolArray)
