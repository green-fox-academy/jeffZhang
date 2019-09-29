function log(timestamp, username, action) {
  return `INFO - ${timestamp} ${username} : ${action}`
}

console.log(log(10, 'jeff', 'addition'))
