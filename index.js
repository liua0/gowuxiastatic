// var http = require('http'),
//     fileSystem = require('fs'),
//     path = require('path');

// var server = http.createServer(function(request, response) {
//     var filePath = path.join(__dirname, 'semantic.min.css');
//     var stat = fileSystem.statSync(filePath);
//     response.writeHead(200, {
//         'Content-Type': 'text/css',
//         'Content-Length': stat.size,
//     });
//     var readStream = fileSystem.createReadStream(filePath);
//     readStream.pipe(response);

// });

var port = process.env.PORT || 1337;
// console.log("Server running at http://localhost:%d", port);
var http = require("http");
var url = require("url");
fileSystem = require('fs'),
path = require('path');
function route (handle, pathname, response, data) {
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response, data);
        //根据pathname调用方法
    }
    else{    //不存在
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end(); 
    }
}
function start (route, handle) {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname;
        var postData = "";
        route(handle, pathname, response, postData);
    }
    http.createServer(onRequest).listen(port);
}

var handle = {};
handle["/semantic.min.css"] = semantic_css;
handle["/semantic.min.js"] = semantic_js;
handle["/jquery.min.js"] = jquery;
handle["/outline-icons.woff2"] = outline_icons;
handle["/icons.woff2"] = icons;
handle["/S6uyw4BMUTPHjx4wXg.woff2"] = xx;
start(route, handle);
console.log("Server running at http://localhost:%d", port);


function xx(response, data) {
    var filePath = path.join(__dirname, 'S6uyw4BMUTPHjx4wXg.woff2');
    var stat = fileSystem.statSync(filePath);
    response.writeHead(200, {
        'Content-Length': stat.size,
    });
    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
}

function icons(response, data) {
    var filePath = path.join(__dirname, 'icons.woff2');
    var stat = fileSystem.statSync(filePath);
    response.writeHead(200, {
        'Content-Length': stat.size,
    });
    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
}


function outline_icons(response, data) {
    var filePath = path.join(__dirname, 'outline-icons.woff2');
    var stat = fileSystem.statSync(filePath);
    response.writeHead(200, {
        'Content-Length': stat.size,
    });
    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
}


function semantic_css (response, data) {
    var filePath = path.join(__dirname, 'semantic.min.css');
        var stat = fileSystem.statSync(filePath);
        response.writeHead(200, {
            'Content-Length': stat.size,
        });
        var readStream = fileSystem.createReadStream(filePath);
        readStream.pipe(response);
}

function jquery (response, data) {
    var filePath = path.join(__dirname, 'jquery.min.js');
        var stat = fileSystem.statSync(filePath);
        response.writeHead(200, {
            'Content-Length': stat.size,
        });
        var readStream = fileSystem.createReadStream(filePath);
        readStream.pipe(response);
}

function semantic_js(response, data) {
    var filePath = path.join(__dirname, 'semantic.min.js');
        var stat = fileSystem.statSync(filePath);
        response.writeHead(200, {
            'Content-Type': 'text/css',
            'Content-Length': stat.size,
        });
        var readStream = fileSystem.createReadStream(filePath);
        readStream.pipe(response);
}