const socket = io.connect('http://localhost:7890');

const getKey = () =>{
  socket.emit('getKey', {
    action: 'get'
  })
}

const listenForKey = () => {
  socket.on('provideKey', data => {
    console.log(data);
  })
}

getKey();

listenForKey();