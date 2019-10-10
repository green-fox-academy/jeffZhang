let d = document
let list = d.querySelector('ul')

let newLi = d.createElement('li')
newLi.textContent = 'The Green Fox'
list.appendChild(newLi)

let newLi2 = d.createElement('li')
newLi2.textContent = 'The Lamplighter'
list.appendChild(newLi2)

let heading = d.createElement('h2')
heading.textContent = 'I can add elements to the DOM!'
let container = d.querySelector('.container')
d.querySelector('body').insertBefore(heading, container)
container.innerHTML =
  '<img src="https://static.wixstatic.com/media/f4461b_83457ca5dd844c71a760d36e6583d0ff.png/v1/fill/w_168,h_168,al_c,usm_0.66_1.00_0.01/f4461b_83457ca5dd844c71a760d36e6583d0ff.png" />'
