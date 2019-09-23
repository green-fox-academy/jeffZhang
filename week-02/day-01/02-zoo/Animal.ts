abstract class Animal {
  protected name: string
  protected age: number
  protected gender: string // addtional

  getName(): string {
    return this.name
  }

  getGender(): string {
    return this.gender
  } // addtional

  abstract breed()
}

class BirdOrReptile extends Animal {
  protected scales: boolean // addtional
  protected skeleton: string // addtional

  constructor(name: string) {
    super()
    this.name = name
  }

  breed() {
    return 'laying eggs.'
  }
}

export class Reptile extends BirdOrReptile {}
export class Bird extends BirdOrReptile {}

export class Mammal extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }

  breed() {
    return 'pushing miniature versions out.'
  }
}
