// var express = require('express');
// var { createServer } = require('node:http');
// // var {Server} = require('socket.io');

// var app = express();
// // app.use(express.static(__dirname+"/public"))
// const server = createServer(app);
// // const io = new Server(server);

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello Sunanda</h1>')
// })

// server.listen(6000,()=>{
//     console.log("server is running on port 6000")
// })
const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');


const app = express();
app.use(express.static(__dirname+"/public"))
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
  });

var ADD=[]
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('Hi',()=>{
        Hi.push(ADD)
        socket.broadcast.emit('chat',{ADD})
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

server.listen(35000, () => {
  console.log('server running at http://localhost:3500');
});