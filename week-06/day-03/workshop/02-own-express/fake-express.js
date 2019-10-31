const http = require('http')
const url = require('url')

let httpCallback = (req, res) => {
  const reqUrl = url.parse(req.url, true)
  if (reqUrl.pathname === '/test' && (req.method === 'GET' || 'POST')) {
    handlers[`${req.method}-${reqUrl.pathname.slice(1)}`](req, res)
    return
  }

  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.end(`Page not found.`)
}

/*handlers have all the callbacks, and they will be triggered when the server(the attribute of FakeExpress) listens to a request.*/
let handlers = {}

/*just like a middleware to wrap http.Server, make it easy to use*/
class FakeExpress {
  server = http.createServer(httpCallback)

  get = (url, getCallback) => {
    handlers[`GET-${url.slice(1)}`] = getCallback
  }

  post = (url, postCallback) => {
    handlers[`POST-${url.slice(1)}`] = postCallback
  }

  listen = (port, hostname, listenCallback) =>
    this.server.listen(port, hostname, listenCallback)
}

module.exports = fakeExpress = () => new FakeExpress()
