const doSomethingAsync = () => {
  return new Promise(resolve => {
    // setTimeout(() => resolve('I did something'), 3000)
    console.log('1st in promise')
    resolve('in promise')
  })
}

console.log('before')
doSomethingAsync().then(res => {
  console.log(res)
})
console.log('after')

//======================
console.log('//======================')

const aFunction = async () => {
  return 'test'
}
aFunction().then(res => {
  console.log(res)
}) // This will alert 'test'

//======================
console.log('//======================')

const res = aFunction()
console.log(res)
