const express = require('express')

const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GET request
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// POST request
app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Hello World! This is a POST request')
})

// PUT request
app.put('/', (req, res) => {
  res.send('Hello World! This is a PUT request')
})

// DELETE request
app.delete('/', (req, res) => {
  res.send('Hello World! This is a DELETE request')
})

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})