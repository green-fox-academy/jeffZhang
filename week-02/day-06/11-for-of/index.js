const data = [5, 1, 2, 9, 7, 3, 8]

let max = Number.MIN_SAFE_INTEGER
for (let element of data) {
  max = element > max ? element : max
}

console.log(max)
