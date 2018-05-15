var http = require('http')

var httpServer = http.createServer()

function beersHandler(res) {
  var beers = [
    { name: 'Lone Pine', brewery: 'Sawdust City'},
    { name: 'Lug Tread', brewery: 'Beaus'}
  ]
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(beers))
}

function rootHandler(res) {
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello World</h1>')
}

var urlHandlers = {
  'GET /': rootHandler,
  'GET /beers': beersHandler
}

httpServer.on('request', function(req, res) {
  var handler = urlHandlers[`${req.method} ${req.url}`]

  if (handler) {
    handler(res)
    return
  }

  res.statusCode = 404
  res.end('Not Found')
})

httpServer.listen(8080, function(err) {
  if(err) {
    console.error('Failed to start http server!')
    exit()
  }

  console.log('Server listening on localhost:8080.')
})

