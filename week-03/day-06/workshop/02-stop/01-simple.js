const d = document
const button = d.querySelector('button')

window.addEventListener('load', () => {
  let timer = setTimeout(() => {
    alert('5 secs passed')
  }, 5000)

  button.addEventListener('click', () => {
    clearTimeout(timer)
  })
})
