let d = document
let inspector = d.querySelector('div')
let style = inspector.style

let nav = d.querySelector('nav')

let positionX = 0
let positionY = 0
let zoomLevel = 100

const navigationFunc = direction => {
  switch (direction) {
    case 'up':
      positionY -= 10
      style.backgroundPositionY = positionY.toString() + 'px'
      break
    case 'down':
      positionY += 10
      style.backgroundPositionY = positionY.toString() + 'px'
      break
    case 'left':
      positionX -= 10
      style.backgroundPositionX = positionX.toString() + 'px'
      break
    case 'right':
      positionX += 10
      style.backgroundPositionX = positionX.toString() + 'px'
      break
    default:
      break
  }
}

const zoomFunc = direction => {
  switch (direction) {
    case 'in':
      zoomLevel += 20
      style.backgroundSize = zoomLevel.toString() + '%'
      break
    case 'out':
      zoomLevel -= 20
      style.backgroundSize = zoomLevel.toString() + '%'
      break
    default:
      break
  }
}

const actionFunc = event => {
  let action = event.target.getAttribute('data-action')
  let direction = event.target.getAttribute('data-direction')
  action === 'move' ? navigationFunc(direction) : zoomFunc(direction)
}

nav.addEventListener('click', actionFunc)
