var http = require("http");
var server = http.createServer(function (req, res) {
    console.log('Hello AWS')
    res.write('Hello aws')
    res.end()
})
server.listen(4800);
console.log("Server running in 4800")