const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Harry2');
});

app.get('/about', (req, res) => {
  res.send('I am the about page');
});

// Run with:
// node --watch index.js

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


#How to Run

#node index.js

#node --watch index.js

#http://localhost:3000 → Home
#http://localhost:3000/about → About page