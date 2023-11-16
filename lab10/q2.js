const http = require("http");

const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    let html = fs.readFileSync(path.join(__dirname, 'cat.png'));
    res.end(html);
}).listen(3000, '127.0.0.1', () => { console.log('listening on http://127.0.0.1:3000') });

