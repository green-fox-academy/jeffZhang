const vectors = [[1, 2, 3], [], [2, 3], [-1], [6, 7, 8, 9]]

const makeVectors = ([x = 0, y = 0, z = 0]) => {
  return [x, y, z]
}

console.log(vectors.map(vector => makeVectors(vector)))

// expected result:
// [1,2,3]
// [0,0,0]
// [2,3,0]
// [-1,0,0]
// [6,7,8]
