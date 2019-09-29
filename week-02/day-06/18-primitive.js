function primitiveFields({ ...params }) {
  let returnArray = []
  for (let [key, value] of Object.entries(params)) {
    if (typeof value !== 'object') {
      returnArray.push(key)
    }
  }

  return returnArray
}

console.log(primitiveFields({ x: 1, y: true, z: [] }))

// should return
//['x', 'y']
