'use strict'
const fs = require('fs');
const express = require('express');

const app = express();

app.listen(443, "Github", ()=>{
    console.log('Server är igång på github?')
});

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "login.html");
} );

