var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

var server = http.createServer(function(req, res) {
    var uri = url.parse(req.url)

    switch(uri.pathname) {
        case '/':
            sendFile(res, 'index.html', 'text/html')
            break
        default:
            res.end('404 not found')
    }
})

server.listen(process.env.PORT || 8080)

function sendFile(res, fileName, contentType) {
    fs.readFile(fileName, function(err, content) {
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(content, 'utf-8')
    })
}

