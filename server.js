var http = require("http");
var url = require("url");

function start (route, handle) {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname;
        var postData = "";
        route(handle, pathname, response, postData);
    }
    http.createServer(onRequest).listen(1337);
}

exports.start = start;