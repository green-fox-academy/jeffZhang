fetch('index.html')
  .then(response => {
    if (response.status === 200) {
      return response.text()
    }
    return `wrong`
  })
  .then(data => (document.querySelector('.fetch-container').innerHTML = data))
