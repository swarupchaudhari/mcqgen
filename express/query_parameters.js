const express = require('express')
const app = express()
const port = 3000

// Example URL: http://localhost:3000/search?q=Simran&name=Harry&location=India

app.get('/search', (req, res) => {
  let query = req.query.q
  let name = req.query.name
  let location = req.query.location

  res.send(`${name} searched for ${query} from ${location}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})