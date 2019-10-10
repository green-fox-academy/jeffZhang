const d = document
let button = d.querySelector('button')
let divClass = d.querySelector('div').classList
button.onclick = () => {
  divClass.toggle('party')
}
