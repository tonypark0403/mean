var express = require('express');
var app = express();
app.listen('3000', (err)=>{
    if(err) throw err;

    console.log('listening on port 3000');
});