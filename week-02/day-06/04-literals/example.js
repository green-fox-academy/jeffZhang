var type = 'regular'
var color = 'blue'
var height = 40
var propName = 'height'

// before ES6
var lamp = {
  type: type,
  color: color
}
console.log(lamp)
lamp[propName] = height
console.log(lamp)

// with and after ES6
var newLamp = {
  type,
  color,
  [propName]: 50
}
console.log(newLamp)
