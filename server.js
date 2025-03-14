const express = require('express')
const app = express()
const port = 3000

const postsRouter = require('./routers/post_routers')

app.use('/posts', postsRouter)

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
} )

// basic route
app.get('/', (req, res)=>{
  res.send('Welcome to server')
})



