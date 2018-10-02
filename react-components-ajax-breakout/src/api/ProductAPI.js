export const fetchProducts = () => {
  return new Promise(resolve => {
    fetch("http://localhost:8080/beers")
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error("Failed to get beers");
      })
      .then(json => {
        resolve(json.data);
      });
  });
};

export const updateProduct = product => {
  return new Promise(resolve => {
    debugger;
    fetch(`http://localhost:8080/beers/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        debugger;
        resolve(json.data);
      });
  });
};
