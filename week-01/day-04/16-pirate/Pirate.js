class Pirate {
  constructor() {
    this.drinkTimes = 0
    this.alive = true
  }

  drinkSomeRum() {
    this.drinkTimes++
  }

  howsItGoingMate() {
    if (this.drinkTimes < 5) {
      return 'Pour me anudder!'
    }
    return "Arghh, I'ma Pirate. How d'ya d'ink its goin?"
  }

  die() {
    this.alive = false
    return `He's dead`
  }

  brawl(anotherPirate) {
    if (anotherPirate.alive) {
      let chance = Math.floor(Math.random() * 3)

      switch (chance) {
        case 0:
          this.die()
          break
        case 1:
          anotherPirate.die()
          break
        case 2:
          this.die()
          anotherPirate.die()
          break
        default:
          break
      }
    }
  }
}

module.exports = Pirate