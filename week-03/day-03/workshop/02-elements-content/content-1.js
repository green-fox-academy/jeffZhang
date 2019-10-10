//task 1

// let lastText = document.querySelector('.animals').textContent

// let allParas = document.querySelectorAll('p')
// allParas.forEach(para => {
//   para.textContent = lastText
// })

//task 2
let lastHtml = document.querySelector('.animals').innerHTML

let allParas = document.querySelectorAll('p')
allParas.forEach(para => {
  para.innerHTML = lastHtml
})
