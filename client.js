'use strict'
const express = require('express')
const socketio = require('socket.io')
const cookieParser = require('cookie-parser')
const jsdom = require('jsdom')
const fs = require('fs')

//Sätter igång en express server
const PORT = 443
const app = express()
const expressServer = app.listen(PORT, ()=>{
    console.log('Min server lyssnar nu på port:' + PORT)
})

//Middleware
app.use(cookieParser())
app.use('/klientgrejer', express.static('./klientgrejer'))
app.use(express.urlencoded({extended: true}))

//Sätter igång Socketio servern på samma port
const io = socketio(expressServer)

app.get('/', (req, res)=>{
    res.sendFile(dirname__ + 'login.html')
})