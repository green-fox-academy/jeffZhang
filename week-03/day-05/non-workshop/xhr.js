let request = new XMLHttpRequest()
request.open('GET', 'index.html', true)
request.send()

request.onreadystatechange = () => {
  if (request.readyState === 4) {
    responseIsReady(request.response)
  }
}

console.log(request.response)

function responseIsReady(data) {
  document.querySelector('.container').innerHTML = data
}


