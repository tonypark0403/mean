var express = require('express');
var app = express();
app.listen('3000', (err)=>{
    if(err) throw err;

    console.log('listening on port 3000');
});

app.get('/', (req,res)=>{
    console.log('Tony\'s home');
    res.end();
});

app.get('/api/User', (req,res)=>{
    res.json([
        {'name' : 'Tony'},
        {'address' : 'north york'},
        {'phone' : '647-123-4567'}
    ]); 
    //console.log('hello'); res.end();
});