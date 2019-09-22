'use strict'

class Carrier {
  constructor(health, ammo = 0) {
    this.aircrafts = []
    this.ammo = ammo
    this.health = health
  }

  get allNeededAmmo() {
    if (!this.aircrafts.length) {
      return 0
    }
    return this.aircrafts.reduce(
      (accumulator, aircraft) => accumulator + aircraft.neededAmmo,
      0
    )
  }

  get totalFire() {
    if (!this.aircrafts.length) {
      return 0
    }
    return this.aircrafts.reduce(
      (accumulator, aircraft) => accumulator + aircraft.totalFire,
      0
    )
  }

  add(aircraft) {
    this.aircrafts.push(aircraft)
  }

  fill() {
    if (!this.ammo) {
      throw new Error('!NO AMMO!')
    }

    if (!this.aircrafts.length) {
      console.log('!No aircrafts on board.')
      return
    }

    if (this.allNeededAmmo > this.ammo && this.aircrafts.length) {
      this.aircrafts.forEach(aircraft => {
        if (aircraft.isPriority()) {
          this.ammo = aircraft.refill(this.ammo)
        }
      })
      if (!this.ammo) {
        return
      }

      this.aircrafts.forEach(aircraft => {
        if (!aircraft.isPriority()) {
          this.ammo = aircraft.refill(this.ammo)
        }
      })
      return
    }

    if (this.allNeededAmmo <= this.ammo && this.aircrafts.length) {
      this.aircrafts.forEach(aircraft => {
        this.ammo = aircraft.refill(this.ammo)
      })
      return
    }

    console.log('!Other unexpected conditions')
  }

  fight(carrier) {
    if (!this.aircrafts.length) {
      return 0
    }
    let totalFire = this.aircrafts.reduce(
      (accumulator, aircraft) => accumulator + aircraft.fight()
    )
    carrier.health > totalFire
      ? (carrier.health -= totalFire)
      : (carrier.health = 0)
  }

  getStatus() {
    if (!this.health) {
      return `It's dead Jim :(`
    }

    return (
      `HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammo}, Total damage: ${this.totalFire}
    Aircrafts:` +
      this.aircrafts.reduce(
        (accumulator, aircraft) => accumulator + aircraft.getStatus() + '\n',
        '\n'
      )
    )
  }
}

module.exports = Carrier
