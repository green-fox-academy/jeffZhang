let king = document.querySelector('#b325')
console.log('king', king)

let businessLamp = document.querySelectorAll('.big')
businessLamp.forEach(item => {
  console.log(item)
})

let conceitedKing = document.querySelectorAll('section div')
conceitedKing.forEach(item => {
  alert(item.textContent)
})

let noBusiness = document.querySelectorAll('div')
noBusiness.forEach(item => {
  console.log(item)
})
