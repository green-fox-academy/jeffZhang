//merge sort pure with more than one js array
function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array
  }
  let middle = Math.floor(array.length / 2)
  let leftArray = mergeSort(array.slice(0, middle))
  let rightArray = mergeSort(array.slice(middle))
  return mergeHalves(leftArray, rightArray)
}

function mergeHalves(leftArray: number[], rightArray: number[]): number[] {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex])
      leftIndex++
    } else {
      resultArray.push(rightArray[rightIndex])
      rightIndex++
    }
  }
  return resultArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex))
}

let array3 = [3, 4, 5, 4, 3, 9, 80, 0]
console.log(mergeSort(array3))

// =======================================!!!!!!!!bugged solution ============================
//merge sort with indices and less arrays
// function mergeSortIndex(
//   array: number[],
//   tempArray: number[],
//   leftStart: number,
//   rightEnd: number
// ): void {
//   if (leftStart >= rightEnd) {
//     return
//   }
//   let middle = Math.ceil((leftStart + rightEnd) / 2)
//   mergeSortIndex(array, tempArray, leftStart, middle)
//   mergeSortIndex(array, tempArray, middle + 1, rightEnd)

//   mergeHalvesIndex(array, tempArray, leftStart, rightEnd)
// }

// function mergeHalvesIndex(
//   array: number[],
//   tempArray: number[],
//   leftStart: number,
//   rightEnd: number
// ): void {
//   let leftEnd = Math.ceil((leftStart + rightEnd) / 2)
//   let rightStart = leftEnd + 1
//   let size = rightEnd - leftStart + 1

//   let left = leftStart
//   let right = rightStart
//   let index = leftStart

//   while (left < leftEnd && right < rightEnd) {
//     if (array[left] < array[right]) {
//       tempArray.push(array[left])
//       left++
//     } else {
//       tempArray.push(array[right])
//       right++
//     }
//   }

//   array = tempArray.concat(array[leftEnd]).concat(array[rightEnd])
// }

// let array4 = [3, 4, 5, 4, 3, 9, 80, 0]
// mergeSortIndex(array4, [], 0, array4.length - 1)
// console.log(array4)
