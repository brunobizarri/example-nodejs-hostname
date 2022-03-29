const http = require('http');
const os = require('os');

const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let hostName = os.hostname();
  res.end(hostName);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});