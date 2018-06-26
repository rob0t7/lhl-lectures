export const beerData = [
  {
    id: 1,
    name: "Lone Pine",
    style: "IPA"
  }
];

export const fetchBeers = jest.fn(() => Promise.resolve(beerData));
