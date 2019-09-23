import Flyable from './Flyable'

interface Vehicle {
  ammoStorage: number
  maximumAmmo: number
  refill?(): number
}

class Truck implements Vehicle {
  ammoStorage: number
  maximumAmmo: number

  constructor(ammo: number, max: number) {
    this.ammoStorage = ammo
    this.maximumAmmo = max
  }
}

abstract class Aircraft implements Flyable, Vehicle {
  ammoStorage: number
  maximumAmmo: number
  damage: number

  constructor(ammoStorage: number, damage: number) {
    this.ammoStorage = ammoStorage
    this.damage = damage
  }

  refill(): number {
    return null
  }

  fight(): void {
    //
  }

  abstract isPriority(): boolean
}

class F16 extends Aircraft {
  isPriority() {
    return false
  }
}

class Carrier {
  aircraftStorage: Flyable[]
  constructor() {
    this.aircraftStorage = []
  }
  addNewAircraft(newAircraft: Flyable): void {
    this.aircraftStorage.push(newAircraft)
  }
}

let truck = new Truck(3, 3)
console.log(truck)
let f16 = new F16(3, 3)
console.log(f16)
