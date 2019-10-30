const url = require('url')

exports.sampleRequest = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var name = 'World'
  if (reqUrl.query.name) {
    name = reqUrl.query.name
  }

  var response = {
    text: 'Hello ' + name
  }

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(response))
}

exports.testRequest = function(req, res) {
  body = ''

  req.on('data', function(chunk) {
    /*chunk is a binary buffer*/
    console.log('execute just once and chunk is', chunk.toString())
    body += chunk
    console.log(body)
  })

  req.on('end', function() {
    postBody = JSON.parse(body)
    console.log('postBoy', postBody)

    var response = {
      text: 'Post Request Value is  ' + postBody.a
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(response))
  })
}

exports.invalidRequest = function(req, res) {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.end('Invalid Request')
}
