const express = require('express')
const app = express()
var port = process.env.PORT || 1337;

app.use("/",express.static(__dirname + "/public"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
