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
function two (response, data) {
    var body = '<html>' + 
        '<head>' +
        '<meta http-equiv-"Content-Type" content="text/html;charset=UTF-8"/>' +
        '</head>' +
        '<body>' +
        '<a href="/one">one</a>' +
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();  
}
exports.one = one;
exports.two = two;