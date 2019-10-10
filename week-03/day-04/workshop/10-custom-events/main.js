'use strict'

const myDiv = document.querySelector('div')

myDiv.addEventListener('left-side-click', ev => {
  ev.target.style.backgroundColor = 'yellow'
})

myDiv.addEventListener('right-side-click', ev => {
  ev.target.style.backgroundColor = 'blue'
})

function simulateClick(event) {
  var evtLeft = new CustomEvent('left-side-click')
  var evtRight = new CustomEvent('right-side-click')

  event.screenX > 78
    ? myDiv.dispatchEvent(evtLeft)
    : myDiv.dispatchEvent(evtRight)
}

const body = document.querySelector('body')
body.addEventListener('click', simulateClick)
