// function* idMaker() {
//   var index = 0
//   while (index < 3) yield index++
//   return 'done'
// }

// var gen = idMaker()
// console.log(gen.next()) // 0
// console.log(gen.next()) // 1
// console.log(gen.next()) // 2
// console.log(gen.next()) //
// console.log(gen.next()) //
// console.log(gen.next()) //
//------------------------------------------------------//
// function* gen2() {
//   let ask1 = yield '2 + 2?'
//   console.log(ask1) // 4
//   let ask2 = yield '3 * 3?'
//   console.log(ask2) // 9
// }

// let generator2 = gen2()

// console.log(generator2.next().value) // "2 + 2?"
// console.log(generator2.next(4).value) // "3 * 3?"
// console.log(generator2.next(9).done) // true
//------------------------------------------------------//

function* gen3() {
  try {
    let result = yield '2 + 2?' // (1)

    console.log(
      'The execution does not reach here, because the exception is thrown above'
    )
  } catch (e) {
    console.log(e.message)
  }
}

let generator3 = gen3()

let question = generator3.next().value
console.log(question)

// try {
  generator3.throw(new Error('The answer is not found in my database')) // (2)
// } catch (e) {
//   console.log('errorpp') // 显示错误
// }
