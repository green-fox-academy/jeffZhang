import { Reservationy } from './reservationy'

const DOW = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SON']

class Reservation implements Reservationy {
  private dow: string
  private code: string

  constructor() {
    this.dow = this.getDowBooking()
    this.code = this.getCodeBooking()
  }
  getDowBooking(): string {
    let random_index = Math.floor(Math.random() * 7)
    return DOW[random_index]
  }

  getCodeBooking(): string {
    let random_string = '',
      random_ascii,
      random_number

    for (let i = 0; i < 8; i++) {
      random_number = Math.random()
      random_ascii = Math.floor(
        random_number > 0.5 ? Math.random() * 25 + 65 : Math.random() * 9 + 48
      )
      random_string += String.fromCharCode(random_ascii)
    }
    return random_string
  }

  getReservation() {
    return `Booking# ${this.code} for ${this.dow}`
  }
}

for (let i = 0; i < 10; i++) {
  let res = new Reservation()
  console.log(res.getReservation())
}
