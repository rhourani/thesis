const http = require('node:http');
const express = require('express');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello World\n');
});

const app = express();
app.get('/', (req, res) => {
  res.type('text').send('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
