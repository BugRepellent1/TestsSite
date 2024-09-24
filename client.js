'use strict'
const express = require('express')

//Sätter igång en express server
const PORT = 443
const app = express()
const expressServer = app.listen(PORT, ()=>{
    console.log('Min server lyssnar nu på port:' + PORT)
})

app.get('/', (req, res)=>{
    res.sendFile(dirname__ + 'login.html')
})