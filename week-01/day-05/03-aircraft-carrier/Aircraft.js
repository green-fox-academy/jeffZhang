'use strict'

class Aircraft {
  constructor() {
    this.ammo = 0
    this.type = this.constructor.name

    switch (this.type) {
      case 'F16':
        this.damage = 30
        this.maxAmmo = 8
        break
      case 'F35':
        this.damage = 50
        this.maxAmmo = 12
        break
      default:
        this.damage = 0
        this.maxAmmo = 0
        break
    }
  }

  get neededAmmo() {
    return this.maxAmmo - this.ammo
  }

  get totalFire() {
    return this.ammo * this.damage
  }

  fight() {
    let allDamage = this.totalFire
    this.ammo = 0
    return allDamage
  }

  refill(ammoAmount) {
    if (ammoAmount < 0) {
      return 0
    }

    let ammoNeedToLoad = this.neededAmmo
    if (ammoAmount > ammoNeedToLoad) {
      this.ammo = this.maxAmmo
      return ammoAmount - ammoNeedToLoad
    }

    this.ammo += ammoAmount
    return 0
  }

  getType() {
    return this.type
  }

  getStatus() {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.damage}, All Damage: ${this.totalFire}`
  }

  isPriority() {
    return this.type === 'F35' ? true : false
  }
}

class F16 extends Aircraft {}

class F35 extends Aircraft {}

module.exports = {
  F16,
  F35
}
