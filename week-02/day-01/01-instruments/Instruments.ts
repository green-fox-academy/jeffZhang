abstract class Instrument {
  protected name: string
  abstract play()
}

abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number

  abstract sound()

  play() {
    console.log(
      `${this.name}, a ${
        this.numberOfStrings
      }-stringed instrument that goes ${this.sound()}`
    )
  }
}

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super()
    this.numberOfStrings = numberOfStrings
    this.name = 'Electric Guitar'
  }
  sound(): string {
    return 'Twang'
  }
}

export class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super()
    this.numberOfStrings = numberOfStrings
    this.name = 'Bass Guitar'
  }
  sound(): string {
    return 'Duum-duum-duum'
  }
}

export class Violin extends StringedInstrument {
  constructor() {
    super()
    this.numberOfStrings = 4
    this.name = 'Violin'
  }
  sound(): string {
    return 'Screech'
  }
}
