const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

io.on('connection', (socket) => {
  console.log('New connection');
  socket.emit('message', 'Welcome to the chat');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
