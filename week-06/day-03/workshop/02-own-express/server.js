require('dotenv').config()
const HOST_NAME = process.env.HOST_NAME || 'localhost'
const PORT = process.env.PORT || 3000

const fakeExpress = require('./fake-express.js')
/*fakeExpress() create an instance of FakeExpress from fake-express file, and this instance has an attribute , called server, which is an instance of http.Server, and created by http.createServer.
And all the request listen functions are triggered in the callback of server*/
const app = fakeExpress()

/*still use the listen function of app.server*/
app.listen(PORT, HOST_NAME, () => console.log(`App is running on ${PORT}`))

/*parameters in app.get/post will be passed to the object 'handlers' in fake-express file, and store there*/
app.get('/test', (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(`GET: my url is ${req.url}`)
})

app.post('/test', (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(`POST: my url is ${req.url}`)
})

/*in this file, app.get, app.post just to store parameters in handlers.*/
