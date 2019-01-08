var express = require("express");
var app = express();
app.use("/",express.static(__dirname + "/public"));
app.listen(port);

var port = process.env.PORT || 1337;

console.log("Server running at http://localhost:%d", port);
