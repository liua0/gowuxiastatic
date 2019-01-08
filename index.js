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
handle["/"] = one;

start(route, handle);
console.log("Server running at http://localhost:%d", port);

function one (response, data) {
    var body = '<html>' + 
        '<head>' +
        '<meta http-equiv-"Content-Type" content="text/html;charset=UTF-8"/>' +
        '</head>' +
        '<body>' +
        '<a href="/two">two</a>' +
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    //当Content-Type为"text/plain"时，返回的内容将直接显示
    response.write(body);
    response.end(); 
}