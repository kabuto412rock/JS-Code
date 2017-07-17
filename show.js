var http = require('http')
var fs = require('fs')

fs.readFile(process.argv[2], function (err, html) {
  if (err) {
    throw err
  }
  http.createServer(function (request, response) {
    response.writeHeader(200, {'Content-Type': 'text/html'})
    response.write(html)
    response.end()
  }).listen(8000)
})
