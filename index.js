const express = require('express');

const app = express();
const port = 7890
const server = app.listen(port, () => {
  console.log('port: ' + port);
});

app.use(express.static('root'));