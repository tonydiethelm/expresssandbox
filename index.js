const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.post('/', (request, response) => {
    console.log('Recieved a post on /.')
})


app.listen(port, () => {
  console.log(`Sandbox app listening on port ${port}`)
})