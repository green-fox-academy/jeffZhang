const d = document
const button = d.querySelector('button')

let buttonClicked = false
let buttonClickedCount = 0

window.addEventListener('load', () => {
  let timer = setTimeout(() => {
    alert('5 secs passed')
  }, 5000)

  button.addEventListener('click', () => {
    buttonClickedCount++
    if (buttonClickedCount === 1) {
      buttonClicked = !buttonClicked

      new Promise((resolve, reject) => {
        if (!buttonClicked) {
          resolve('Button is ')
        } else {
          clearTimeout(timer)
          reject('Button is clicked, no alert.')
        }
      }).catch(error => {
        console.log(error)
        return error
      })
    } else {
      console.log('Clicked more than once')
    }
  })
})
