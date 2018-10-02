const Express = require("express");
const BodyParser = require("body-parser");
const Morgan = require("morgan");
const cors = require("cors");

const app = Express();

app.use(BodyParser.json());
app.use(Morgan("dev"));
app.use(cors());
const db = {
  styles: [
    "Pilsner",
    "American Lager",
    "Lager",
    "Ale",
    "Stout",
    "Porter",
    "ESB",
    "California Common",
    "Kolsch"
  ],
  beerIds: [1, 2, 3],
  nextBeerId: 4,
  beers: {
    1: {
      id: 1,
      name: "Budweiser",
      brewery: "AB Inbev",
      style: "American Lager",
      abv: 4.0
    },
    2: {
      id: 2,
      name: "Canadian",
      brewery: "Molson",
      style: "American Lager",
      abv: 4.5
    },
    3: {
      id: 3,
      name: "Lug Tread",
      brewery: "Beaus all natural Brewing",
      style: "Kolsch",
      abv: 5.2
    }
  }
};

app.get("/beers", (req, res) => {
  const beers = db.beerIds.map(id => db.beers[id]);
  res.json({ data: beers });
});

app.post("/beers", (req, res) => {
  const { name, brewery, style, abv } = req.body;
  const beer = { id: db.nextBeerId++, name, brewery, style, abv };
  db.beerIds = [...db.beerIds, beer.id];
  db.beers = { ...db.beers, [beer.id]: beer };

  res.status(201).json({ data: beer });
});

app.get("/beers/:id", (req, res) => {
  const beer = db.beers[req.params.id];
  if (beer) {
    res.json({ data: beer });
  } else {
    res.sendStatus(404);
  }
});

app.put("/beers/:id", (req, res) => {
  const beerId = req.params.id;
  const { name, style, brewery, abv } = req.body;
  const beer = { ...db.beers[beerId], name, style, brewery, abv };
  db.beers = { ...db.beers, [beer.id]: beer };

  res.status(200).json({ data: beer });
});

app.listen(8080, err => {
  if (err) throw err;

  console.log("Server listening on port 8080");
});
