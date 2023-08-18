const productsArray = [
  {
    id: "price_1Ng6pjBiV1fI7a4V4PvsCKH3",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1Ng6rjBiV1fI7a4Vw58OPieU",
    title: "Sunglasses",
    price: 8.99,
  },
  {
    id: "price_1Ng6tHBiV1fI7a4V9kqZ2kKP",
    title: "Camera",
    price: 184.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (productData === undefined) {
    console.log(`Product Data does not existor ID: ${id}`);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
