const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Setting up the server side'
  })
})

app.listen(process.env.PORT || 8081)
