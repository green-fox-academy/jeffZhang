const GOOGLE_API_KEY = 'AIzaSyAS-HpV459V-m1VsG_Zkbt2sdTeZpF9nOA'
const GOOGLE_DOMAIN = 'https://www.google.com/maps/embed/v1/place?key='
const IP_API_KEY = 'a7c753e54da9f84603d88c0b71cdb398'
const IP_DOMAIN = 'http://api.ipapi.com/'

const d = document
const input = d.querySelector('input')
const button = d.querySelector('button')
const iframe = d.querySelector('iframe')

//listeners
input.addEventListener('input', event => {
  if (event.target.value) {
    button.disabled = false
  } else {
    button.disabled = true
  }
})

button.addEventListener('click', event => {
  event.preventDefault()
  let ip = input.value
  fetchCity(ip)
})

//fetch callback
const fetchCity = ip => {
  let ipSearchUrl = `${IP_DOMAIN}${ip}?access_key=${IP_API_KEY}`
  const dataRequest = new XMLHttpRequest()
  dataRequest.onreadystatechange = () => {
    if (dataRequest.readyState === 4) {
      let info = JSON.parse(dataRequest.response)
      let { city, region_name: region } = info
      iframe.src = `${GOOGLE_DOMAIN}${GOOGLE_API_KEY}&q=${city}+${region}`
    }
  }
  dataRequest.open('GET', ipSearchUrl)
  dataRequest.send()
}
