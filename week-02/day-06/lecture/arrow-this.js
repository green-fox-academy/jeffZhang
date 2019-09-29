console.log(this)

class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }

  printThis() {
    console.log(this)
  }

  printOtherThis = () => {
    console.log(this)
  }
}

let parrot = new Animal('parrot', 2)
parrot.printThis()
parrot.printOtherThis()

let myCoffee = {
  withSuger: true,
  withMilk: true,
  printThis: function() {
    //import
  },
  printOtherThis: () => {
    console.log(this)
  }
}

myCoffee.printThis()
myCoffee.printOtherThis()
