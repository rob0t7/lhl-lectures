require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const slug = require('slug');

const app = express();

// This object represents all of our data
const DB = {
  beers: [
    {
      id: uuid(),
      name: 'Lone Pine',
      brewery: 'Sawdust City Brewing',
      logo: 'http://1.bp.blogspot.com/-b5CI2Tv7DbA/UAvs7fXPlYI/AAAAAAAAATc/o_OSDIrJDqw/s1600/SCB_650ml_lonepineIPA_orange.jpg',
      slug: 'lone-pine',
      style: 'IPA',
      abv: 5.5,
    },
    {
      id: uuid(),
      name: 'Robohop',
      brewery: 'Great Lake Brewery',
      logo: 'https://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_143717.jpg',
      slug: 'robohop',
      style: 'IPA',
      abv: 7,
    },
    {
      id: uuid(),
      name: 'Lug Tread',
      brewery: 'Beaus All Natural Brewing',
      logo: 'https://beaus.ca/wp-content/uploads/2015/01/label-lugtread.png',
      slug: 'lug-tread',
      style: 'Kolsch',
      abv: 4.5,
    },
  ],
  styles: ['IPA', 'Kolsch', 'Lager', 'ESB', 'Ale'],
};

// Setup middleware
app.use(morgan('dev')); // we use this for logging all requests

// setup bodyParser to parser incoming POST forms
app.use(bodyParser.urlencoded({ extended: false }));

// setup the view engine
app.set('view engine', 'ejs');

// setup static folder for frontend assets
app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
  res.redirect('/beers');
});

app.get('/beers', (req, res) => {
  let { beers } = DB;
  const { styles } = DB;

  // if the url /beers?style=IPA find all the IPA beers
  if (req.query.style) {
    beers = beers.filter(beer => beer.style === req.query.style);
  }

  const templateVars = {
    beers,
    styles,
  };
  res.render('beers/index.ejs', templateVars);
});

app.get('/beers/new', (req, res) => {
  const templateVars = {
    styles: DB.styles,
    errorMessage: '',
  };
  res.render('beers/new.ejs', templateVars);
});

app.post('/beers', (req, res) => {
  const beer = {
    id: uuid(),
    name: req.body.name,
    brewery: req.body.brewery,
    logo: req.body.logo || '/beer-bottle.png',
    slug: slug(req.body.name),
    style: req.body.style,
    abv: req.body.abv,
  };

  // check if all the reqired fields were provided. If not re-render the form
  if (!beer.name || !beer.brewery || !beer.style || !beer.abv) {
    const templateVars = {
      styles: DB.styles,
      errorMessage: 'Please fill out the form correctly.',
    };
    res.status(406).render('beers/new.ejs', templateVars);
  } else {
    DB.beers.push(beer);
    res.redirect(`/beers/${beer.slug}`);
  }
});

app.get('/beers/:slug', (req, res) => {
  const beer = DB.beers.find(beer => beer.slug === req.params.slug); // eslint-disable-line

  if (beer) {
    const templateVars = {
      beer,
    };
    res.render('beers/show.ejs', templateVars);
  } else {
    res.sendStatus(404);
  }
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Starting server on PORT ${process.env.PORT}.`); // eslint-disable-line no-console
});
