const promiseToDoSomething = () => {
  console.log('starts')
  return new Promise(resolve => {
    setTimeout(() => resolve('1. I did something\n'), 500)
  })
}

const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething()
  const testPromise = await new Promise(resolve => {
    setTimeout(() => resolve(' in promise'), 3000)
  })
  console.log(testPromise, 'this clg is sync, but it is blocked by testPromise')
  return something + `2. and I watched ${testPromise}\n`
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething()
  return something + '3. and I watched as well'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
  console.log(res)
})

console.log('ends')
