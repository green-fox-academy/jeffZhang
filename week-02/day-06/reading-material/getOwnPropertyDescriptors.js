const person111 = {
  set nameName(newName) {
    console.log(newName)
  },
  get name() {
    return 'get-name-function'
  }
}

const person222 = {}
Object.assign(person222, person111)
console.log(person222)
console.log(Object.getOwnPropertyDescriptor(person111, 'nameName'))

const person333 = {}
Object.defineProperties(person333, Object.getOwnPropertyDescriptors(person111))
console.log(person333)
