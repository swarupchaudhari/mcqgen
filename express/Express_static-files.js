const express = require('express')
const app = express()
const port = 3000

// Serve static files
app.use(express.static('public'))

// Route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})