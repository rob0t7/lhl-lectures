const beers = [
  {
    name: "Lone Pine",
    style: "IPA",
    abv: 6.5,
    description:
      "Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  "
  }
];
export const fetchProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(beers);
    }, 2000);
  });
};

export const addProduct = product => {
  /* const response = await fetch('/api/prodcuts', {method: 'POST'})
   * if (response.ok) {
   *   return response.json()
   * }
   * throw new Error("AJAX FAILED")
     } */

  return new Promise(resolve => {
    setTimeout(() => {
      resolve([...beers, product]);
    }, 2000);
  });
};
