var express = require('express');
var socket = require('socket.io');

var app =  express();

server = app.listen(5000,()=>{
    console.log("backend server on");
})

io = socket(server);
io.on('connection', (socket)=>{
    console.log(socket.id);
});