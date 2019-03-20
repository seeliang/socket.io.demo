const express = require('express');
const socket = require('socket.io');

const app = express();
const port = 7890
const server = app.listen(port, () => {
  console.log('port: ' + port);
});

app.use(express.static('root'));

var io = socket(server);

io.on('connection', socket => {
  socket.on('getKey', (data) => {
    if(data.action === 'get') {
      console.log('ser con', socket.id);
      io.to(socket.id).emit('provideKey',{id:socket.id});
    }
  })
});