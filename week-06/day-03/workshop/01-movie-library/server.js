require('dotenv').config()
const HOST_NAME = process.env.HOST_NAME || 'localhost'
const PORT = process.env.PORT || 3000

const server = require('./controller.js')

server.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at http://${HOST_NAME}:${PORT}/`)
})
