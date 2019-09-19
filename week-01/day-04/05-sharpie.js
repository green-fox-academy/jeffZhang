'use strict'

// Create Sharpie class
// We should know about each sharpie their color (which should be a string),
//width (which will be a floating point number),
//inkAmount (another floating point number)

// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie {
  constructor(color, width, inkAmount = 100) {
    this.color = color
    this.width = width > 1 ? width : 1
    this.inkAmount = inkAmount > 0 ? inkAmount : 0
  }

  use(amount) {
    amount = amount > 0 ? amount : 0
    if (this.inkAmount < amount) {
      this.inkAmount = 0
      console.log(`Run out of ink, can't use anymore`)
    } else {
      this.inkAmount -= amount
    }
  }
}

let sharpie1 = new Sharpie('red', 10, 10)
sharpie1.use(19)
console.log(sharpie1)
