let d = document

let lolliEmoji = '🍭'
let timer

let candies = 1000,
  lollies = 0,
  rate = 0

let candiesShow = d.querySelector('.candies')
let lollypopsShow = d.querySelector('.lollypops')
let speedShow = d.querySelector('.speed')

let candyBtn = d.querySelector('.create-candies')
let buyBtn = d.querySelector('.buy-lollypops')
let machineBtn = d.querySelector('.candy-machine')

//candyBtn
const createCandy = () => {
  candies++
  candiesShow.textContent = candies
}

candyBtn.addEventListener('click', createCandy)

//buyBtn
const buyLollies = () => {
  if (candies >= 100) {
    lollies++
    candies -= 100
  }

  if (lollies >= 10) {
    if (timer) {
      window.clearInterval(timer)
    }
    if (rate < Math.floor(lollies / 10)) {
      rate = Math.floor(lollies / 10)
    }

    timer = window.setInterval(autoGenCandies, 1000)
  }
  candiesShow.textContent = candies
  speedShow.textContent = rate
  lollypopsShow.textContent = lolliEmoji.repeat(lollies)
}

const autoGenCandies = () => {
  candies += rate
  candiesShow.textContent = candies
}

buyBtn.addEventListener('click', buyLollies)

//machineBtn
machineBtn.addEventListener('click', () => {
  rate *= 10
  speedShow.textContent = rate
})
