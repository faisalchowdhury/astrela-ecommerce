export const getStoredCart = () => {
  const getCart = localStorage.getItem("cart");
  if (getCart) {
    const convertedData = JSON.parse(getCart);
    return convertedData;
  } else {
    return [];
  }
};

export const addToCart = (id) => {
  const stored = getStoredCart();
  console.log(id);
  if (stored.includes(id)) {
    alert("Data Exist");
  } else {
    stored.push(id);
    const convert = JSON.stringify(stored);
    localStorage.setItem("cart", convert);
  }
};
