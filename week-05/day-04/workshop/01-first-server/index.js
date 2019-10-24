const express = require('express')
const app = express()

app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
  console.log('app is running on 3000')
})

/*if the index.js is in a folder, and at the same time, package.json & node_modules in the upper level, it's required to cd to the folder and fire node in this folder. In this case, node(mon) index.js should be fired in folder 01-first-server, and the static path will be correct.*/
