var http = require('http')
var url = require('url')

// data array that you will filter based on user input
var data = ['First', 'Second', 'Third']

var server = http.createServer(function(req, res) {
    var uri = url.parse(req.url)

    switch(uri.pathname) {
        case '/':
            sendIndex(res)
            break
        case '/search':
            handleSearch(res, uri)
            break
        default:
            res.end('404 not found')
    }
})

server.listen(process.env.PORT || 8080)

// consider this function your index.html for this assignment
// we're building the HTML dynamically on the server before sending it to the client
function sendIndex(res) {
    var html = ''
    html += '<html><head></head><body><h1>Content</h1>'

    // build form input and attach it to the search action
    html = html + '<form action="search">'
    html = html + '<input type="text" name="search" placeholder="Search..." />'
    html = html + '<button type="submit">Search</button>'
    html = html + '</form></div>'

    for(var i = 0; i < data.length; i++) {
        html += '<p>' + data[i] + '</p>'
    }
    html += '</body></html>'
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(html, 'utf-8')
}

// you'll be editting this function to handle the search
// this function gets called when you hit the search button
// you have access to uri because you'll need to look at uri.query to see what the user searched for
// notice the URL changes when you click search - that's how we're communicating with the server here
function handleSearch(res, uri) {
    sendIndex(res)
}

