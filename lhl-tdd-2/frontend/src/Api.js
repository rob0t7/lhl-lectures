export const fetchBeers = () => {
  return new Promise((resolve, reject) => {
    fetch("/api/beers")
      .then(resp => resp.json())
      .then(data => {
        resolve(data);
      })
      .catch(() => {
        console.error("api request failed");
      });
  });
};

export const createBeer = async beerAttributes => {
  try {
    const response = await fetch("/api/beers", {
      method: "POST",
      body: JSON.stringify({ beer: beerAttributes })
    });
    return response.json();
  } catch (err) {
    throw err;
  }
};

export default {
  fetchBeers
};
