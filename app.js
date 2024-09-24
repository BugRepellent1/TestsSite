'use strict'
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, "egenLoginSida")));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "login.html");
} );

app.listen(443, "Github", ()=>{
    console.log('Server är igång på github?')
});