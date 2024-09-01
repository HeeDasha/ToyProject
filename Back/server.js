const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

/* 서버 끄는 명령어 ctrl+c */


