const http = require('http');
const app = require('./api/routes/app');
const server = http.createServer(app);

server.listen(3000, console.log('app is running'));
