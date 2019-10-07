const input = document.querySelector('input')
const log = document.getElementById('log')

input.addEventListener('change', event => {
  log.textContent = event.srcElement.value
})
