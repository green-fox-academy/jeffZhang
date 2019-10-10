let d = document
let title = d.querySelector('h1')

this.addEventListener('keyup', event => {
  console.log(event)
  title.textContent = `Last pressed key code is: ${event.keyCode}`
})
