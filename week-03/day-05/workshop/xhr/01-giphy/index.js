const DOMAIN = 'https://api.giphy.com/v1/gifs/'
const ENDPOINT = 'trending'
const LIMIT = 16
const API_KEY = 'pEXIDqLWH6tszhUIxTdup8t2zOEDBn9w'

//init the ul and li
const appendUlListToDom = number => {
  const d = document
  let ul = d.createElement('ul')
  d.body.appendChild(ul)

  let list = []
  for (let i = 0; i < number; i++) {
    let div = d.createElement('li')
    div.className = 'default'

    list.push(div)
    ul.appendChild(div)
  }
  return list
}
let ulListItems = appendUlListToDom(LIMIT)

//raise xhr
const dataRequest = new XMLHttpRequest()

//chang bg function
const changeBg = (element, height, width, url) => {
  element.style.height = height.toString() + 'px'
  element.style.width = width.toString() + 'px'
  element.style.backgroundImage = `url(${url})`
}

//listener callback
const handleClick = (height, width, url) => {
  return event => {
    event.target.style.backgroundImage = `url(${url})`
    changeBg(event.target, height, width, url)
  }
}

dataRequest.onreadystatechange = () => {
  if (dataRequest.readyState === 4) {
    allData = JSON.parse(dataRequest.response).data
    allData.forEach((datum, index) => {
      let still = datum.images['480w_still']
      changeBg(ulListItems[index], still.height, still.width, still.url)

      let gif = datum.images.original
      ulListItems[index].addEventListener(
        'click',
        handleClick(gif.height, gif.width, gif.url)
      )
    })
  }
}
dataRequest.open(
  'GET',
  `${DOMAIN + ENDPOINT}?api_key=${API_KEY}&limit=${LIMIT.toString()}&rating=G`
)
dataRequest.send()
