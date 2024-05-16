const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log('Successfully send a response to client.')
    res.send('<h1>Hello, world! From Express</h1>')
})

app.listen(80, () => {
    console.log('Listening at port 80')
})
