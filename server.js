const express = require('express')
const app = express()
const port = 3000

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
} )

// basic route
app.get('/', (req, res)=>{
  res.send('Welcome to server')
})



