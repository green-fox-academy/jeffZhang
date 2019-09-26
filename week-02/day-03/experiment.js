//O(n*n)
function unique(array) {
  let uniqArray = []
  for (let i = 0; i < array.length; i++) {
    if (uniqArray.indexOf(array[i]) === -1) {
      uniqArray.push(array[i])
    }
  }
  return uniqArray
}

//hash solution, use key in the object(keys) to represent the element number for the array,
//in short, key for number
function uniqWithObject(array) {
  let keys = {}
  for (let i = 0; i < array.length; i++) {
    keys[array[i]] = 1
  }
  return Object.keys(keys)
}

//bubble sorting
console.log(bubbleSort([3, 4, 5, 4, 3, 9, 80, 0]))

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        ;[array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  return array
}

//quick sorting
