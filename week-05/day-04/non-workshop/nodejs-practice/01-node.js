const http = require('http')

//this callback will fire once there is a request
const server = http.createServer(function(req, res) {
  console.log('request was made:    ' + req.url)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify('hey jeff'))
})

server.listen(3000, '127.0.0.1')
console.log('listen to 3000')
