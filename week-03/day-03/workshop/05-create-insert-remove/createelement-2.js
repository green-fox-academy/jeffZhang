const planetData = [
  { category: 'inhabited', content: 'Foxes', asteroid: true },
  { category: 'inhabited', content: 'Whales and Rabbits', asteroid: true },
  { category: 'uninhabited', content: 'Baobabs and Roses', asteroid: true },
  { category: 'inhabited', content: 'Giant monsters', asteroid: false },
  { category: 'inhabited', content: 'Sheep', asteroid: true }
]

const d = document
let ul = d.querySelector('ul')
ul.removeChild(d.querySelector('li'))

planetData.forEach(item => {
  let li = d.createElement('li')
  li.classList.add(item.category)
  li.textContent = item.content
  ul.appendChild(li)
})
