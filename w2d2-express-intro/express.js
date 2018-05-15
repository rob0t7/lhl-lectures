// Load Libraries
var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')

// Create App
var app = express()

// Data for App
var beers = [
  { name: 'Lone Pine', brewery: 'Sawdust City'},
  { name: '<b>Lug Tread</b>', brewery: 'Beaus'}
]

// define middleware
app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res) {
  res.render('hello.html.ejs')
})

app.get('/beers', function(req, res) {
  res.render('beers/index.html.ejs', {beers: beers})
})

app.get('/beers/new', function(req, res) {
  res.render('beers/new.html.ejs', {errors: []})
})

app.post('/beers', function(req,res) {
  var errors = []

  if (!req.body.name) {
    errors.push('Name is required!')
  }

  if (!req.body.brewery) {
    errors.push('Brewery is required!')
  }

  if (errors.length > 0) {
    res.status('400')
    res.render('beers/new.html.ejs', {errors: errors})
  } else {
    var beer = {
      name: req.body.name,
      brewery: req.body.brewery
    }
    beers.push(beer)
    res.status(201)
    res.redirect('/beers')
  }
})

// Turn app on
app.listen(8080, function(err) {
  if(err) {
    throw new Error('Failed to start server on localhost:8080!')
  }
  console.log('Started server on http://localhost:8080')
})
