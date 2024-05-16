const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('<h1>Hello, world! From Express-2</h1>')
})

app.listen(80, () => {
    console.log('Listening at port 80')
})
