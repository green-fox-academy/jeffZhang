function average(array = []) {
  if (!array.length) {
    const arrayLength = 0
    return 0
  }
  const arrayLength = array.length
  return array.reduce((accumulator, value) => accumulator + value) / arrayLength
}

console.log(average([1, 2, 3, 4, 5]))
