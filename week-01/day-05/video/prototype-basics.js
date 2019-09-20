function talk(sound) {
  console.log(this) // check what is 'this' now
  console.log(this.sound)
}

let animal = {
  talk
}

let cat = {
  sound: 'meow!'
}

let dog = {
  sound: 'woof!'
}

//cat.talk() gives back a error, since talk() is not defined in cat

//set cat's prototype animal
Object.setPrototypeOf(cat, animal)
//so that cat can find the talk function from animal, which is the prototype of
//cat
cat.talk()
Object.setPrototypeOf(dog, animal)
dog.talk()
