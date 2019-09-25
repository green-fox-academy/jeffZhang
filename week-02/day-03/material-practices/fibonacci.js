//basic fibonacci
function fib(n) {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

console.time('basic fib')
console.log(fib(40))
console.timeEnd('basic fib')

//memoization fibonacci
function memoizationFib(n, memo = {}) {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else if (!memo[n]) {
    memo[n] = memoizationFib(n - 1, memo) + memoizationFib(n - 2, memo)
  }
  return memo[n]
}
console.time('memo fib')
console.log(memoizationFib(40))
console.timeEnd('memo fib')
