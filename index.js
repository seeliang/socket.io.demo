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
  console.log('ser con')
});