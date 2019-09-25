//bubble sort using nested for loop
function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

let array = [3, 5, 1, 2, 3, 1, 1, 0, 100]
console.log(array)
console.log(bubbleSort(array))

//another solution with while
function bubbleSort2(array: number[]): number[] {
  let isSorted = false,
    lastUnsorted = array.length - 1
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < lastUnsorted; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        isSorted = false
      }
    }
    lastUnsorted--
  }
  return array
}
let array2 = [3, 5, 1, 2, 3, 1, 1, 0, 100]
console.log(array2)
console.log(bubbleSort2(array2))
