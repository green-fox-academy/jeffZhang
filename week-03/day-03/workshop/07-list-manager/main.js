let d = document
let body = d.querySelector('body')

//structure the top-level
let structure = d.createElement('ul')
body.appendChild(structure)
for (let i = 0; i < 3; i++) {
  let li = d.createElement('li')
  structure.appendChild(li)
}

//food block
let foodsLi = d.querySelector('ul>li:first-of-type')
let foods = d.createElement('ul')
foodsLi.appendChild(foods)

let foodsArr = ['bread', 'milk', 'orange', 'tomato']

for (let i = 0; i < 4; i++) {
  let food = d.createElement('li')
  foods.appendChild(food)
}

foods.childNodes.forEach((item, index) => {
  item.textContent = foodsArr[index]
})

//buttons block
let btnsLi = d.querySelector('body>ul>li:nth-of-type(2)')
let btns = d.createElement('ul')
btnsLi.appendChild(btns)

let btnsArr = ['Up', '>', 'X', 'Down']

for (let i = 0; i < 4; i++) {
  let btn = d.createElement('li')
  let button = d.createElement('button')
  btn.appendChild(button)
  btns.appendChild(btn)
}

btns.childNodes.forEach((item, index) => {
  item.childNodes[0].textContent = btnsArr[index]
})
