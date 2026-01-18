const express = require('express')
const app = express()
require('dotenv').config()


port =process.env.PORT||3000
console.log("hello world")


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Chair aur code</h2>')
})

app.listen(port , () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
