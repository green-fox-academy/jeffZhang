let arr = ['apple', 'banana', 'cat', 'dog']

document.querySelectorAll('li').forEach((li, index) => {
  li.textContent = arr[index]
})

//serveral ways
document.querySelector('ul').classList.add('color')
// document.querySelector('ul').className += 'color'
// document.querySelector('ul').setAttribute('class', 'color')
