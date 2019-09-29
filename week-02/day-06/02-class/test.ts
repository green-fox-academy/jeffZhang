//class in ts
;(function() {
  class Garden {
    private width: number
    private length: number

    constructor(width: number, length: number) {
      this.width = width
      this.length = length
    }

    area(): number {
      return this.width * this.length
    }
    circumference(): number {
      return this.width * 2 + this.length * 2
    }
    efficiency(): number {
      return this.area() / this.circumference()
    }
  }

  let garden = new Garden(10, 10)
  console.log(garden.area())
})()
