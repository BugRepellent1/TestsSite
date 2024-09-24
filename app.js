'use strict'
const fs = require('fs');

window.addEventListener('load', function() {
    fs.readFile("login.html", function(err, data){
        if(err){
            res.writeHead(404)
            res.write('ERROR file not found')
        }else{
            res.write(data)
        }
    })
    })


