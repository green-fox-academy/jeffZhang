const d = document
const timeStamp = d.querySelector('#stamp')
const timer = d.querySelector('#timer')
const button = d.querySelector('button')

const startTime = new Date()
const startTimeSec = startTime.getTime() / 1000

timeStamp.textContent = startTime

button.addEventListener('click', () => {
  waitForButtonClicked().then(seconds => {
    timer.innerText = seconds
  })
})

const waitForButtonClicked = () => {
  return new Promise(resolve => {
    const endTime = new Date()
    const endTimeSec = endTime.getTime() / 1000
    //settimeout for test
    setTimeout(() => {
      resolve((endTimeSec - startTimeSec).toFixed(2))
    }, 1000)
  })
}
