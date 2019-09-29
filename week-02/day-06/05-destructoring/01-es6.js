const { car, computer } = require('./objects')

let { model, color, year, doors, historical } = car
let {
  type,
  monitor: { color: monitor_color, size, HDMI, VGA },
  tower: { color: tower_color, CPU, memory, SSD }
} = computer
