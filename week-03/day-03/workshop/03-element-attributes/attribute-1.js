let image = document.querySelector('img')
let imgSrc = image.getAttribute('src')
image.setAttribute('src', 'http://deji.chez.com/dessins/pp1.gif')

let link = document.querySelector('a')
link.setAttribute('href', imgSrc)

let button2nd = document.querySelector('.this-one')
button2nd.setAttribute('disabled', 'disabled')
button2nd.textContent = "Don't click me!"
