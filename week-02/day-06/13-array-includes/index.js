const removeDuplicated = (array1, array2) => {
  let returnArray = [],
    concatArray = array1.concat(array2)
  concatArray.forEach(element => {
    if (!returnArray.includes(element)) {
      returnArray.push(element)
    }
  })
  return returnArray
}

console.log(removeDuplicated([1, 2, 3], [3, 4, 5, 6]))
