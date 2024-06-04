const http = require("http");
const express = require("express");
const path = require("path")
const app = express();
const { Server} = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

//socket.io
io.on('connection', socket => {
    socket.on('user-message', message => {
       io.emit('message',message);
    });
  
});

app.use(express.static(path.resolve("./public")));

app.get('/',(req,res) => {
    return res.sendFile('/public/index.html')
});

server.listen(
    3000, () => console.log("server is running on port 3000"
))
