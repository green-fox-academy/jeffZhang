const makeMatrix = (height, width, ...cells) => {
  if (cells.length < height * width) {
    return null
  }
  return new Array(height)
    .fill([])
    .map(() => new Array(width).fill(0).map(() => cells.shift()))
}

let arr = []
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    arr.push(i + j)
  }
}
console.log(makeMatrix(10, 10, ...arr))
