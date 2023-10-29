'use strict';

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var target = '';
    switch (req.url) {
        case '/':
        case '/index':
            target = './indexV2.html';
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('bad request');
            return;
    }

    fs.readFile(target, 'utf-8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    })

    fs.readFile('./css/styleV2.css', 'UTF-8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(data);
        res.end();
    })
});

server.listen(3000);
console.log('サーバーを起動しました。');


// console.log('hello, world!');

