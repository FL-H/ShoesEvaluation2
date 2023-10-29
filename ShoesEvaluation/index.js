'use strict';

var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', getCss);
server.listen(8080);
console.log('Server running …');

function getCss(req, res) {
    var url = req.url;
    console.log('url=', url)
    if ('/' == url) {
        fs.readFile('./indexV2.html', 'UTF-8', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if ('/css/styleV2.css' == url) {
        fs.readFile('./css/styleV2.css', 'UTF-8', function (err, data) {
            console.log('styleV2.css is read.')
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    } else if ('/js/totallingV2.js' == url) {
        fs.readFile('./js/totallingV2.js', 'UTF-8', function (err, data) {
            console.log('totallingV2.js is read.')
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else {
        console.log('unexpected url...');
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('bad request');
            // return;
        // res.writeHead(200, {
        //     "Content-Type": "text/html"
        // });
        // const responseMessage = "<h1>Hello World</h1>";
        // res.end(responseMessage);
    }
}

// var server = http.createServer(function (req, res) {
//     var target = '';
//     switch (req.url) {
//         case '/':
//         case '/index':
//             target = './indexV2.html';
//             break;
//         default:
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('bad request');
//             return;
//     }

//     fs.readFile(target, 'utf-8', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//     })

//     fs.readFile('./css/styleV2.css', 'UTF-8', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/css' });
//         res.write(data);
//         res.end();
//     })
// });

// server.listen(3000);
// console.log('サーバーを起動しました。');


// console.log('hello, world!');

