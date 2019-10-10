const kids = [
  { petName: 'Wattled crane', owner: 'Bryant' },
  { petName: 'Devil, tasmanian', owner: 'Alejandro' },
  { petName: 'Mynah, common', owner: 'Nelie' },
  { petName: 'Dolphin, common', owner: 'Mariele' },
  { petName: 'Gray duiker', owner: 'Maddalena' },
  { petName: 'Crab (unidentified)', owner: 'Lucine' },
  { petName: 'Ant (unidentified)', owner: 'Lorianna' },
  { petName: 'Bison, american', owner: 'Tommie' },
  { petName: 'Yellow mongoose', owner: 'Vivyan' },
  { petName: 'Carpet snake', owner: 'Veda' },
  { petName: 'Lesser mouse lemur', owner: 'Isidor' }
]

const d = document
let pets = d.querySelector('#pets')
kids.forEach(kid => {
  let article = d.createElement('article')
  let title = d.createElement('h3')
  title.textContent = kid.owner
  article.appendChild(title)
  let para = d.createElement('p')
  para.textContent = kid.petName
  article.appendChild(para)
  pets.appendChild(article)
})
