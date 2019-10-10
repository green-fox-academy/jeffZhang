let d = document
let container = d.querySelector('#container')

container.style.height = window.screen.height.toString() + 'px'
container.style.overflow = 'auto'

let scrollThreshold = 500

const makeOneDiv = () => {
  let div = d.createElement('div')
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  return div
}

const makeRandomDivs = () => {
  let randomNum = Math.floor(Math.random() * 10) + 10,
    divs = []
  for (let i = 0; i < randomNum; i++) {
    let div = makeOneDiv()
    divs.push(div)
  }
  return divs
}

const appInit = () => {
  makeRandomDivs().forEach(div => {
    container.appendChild(div)
  })
}

appInit()

const scroller = () => {
  container.insertBefore(makeOneDiv(), d.querySelector('#anchorDiv'))
  if (container.scrollTop > 300) {
    container.appendChild(makeOneDiv())
  }
}

container.addEventListener('scroll', scroller)
