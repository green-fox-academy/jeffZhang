const highestValue = obj => {
  let max = Number.MIN_SAFE_INTEGER,
    maxKey = ''
  for (let [key, value] of Object.entries(obj)) {
    if (value > max) {
      max = value
      maxKey = key
    }
  }
  return maxKey
}

console.log(highestValue({ hello: 2, world: 4, jsa: 1, shenzhen: 3 }))
