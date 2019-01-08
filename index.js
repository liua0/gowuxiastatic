var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');

var server = http.createServer(function(request, response) {
    var filePath = path.join(__dirname, 'semantic.min.css');
    var stat = fileSystem.statSync(filePath);
    response.writeHead(200, {
        'Content-Type': 'text/css',
        'Content-Length': stat.size,
    });
    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
