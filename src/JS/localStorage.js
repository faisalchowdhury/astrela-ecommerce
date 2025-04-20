import toast from "react-hot-toast";

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

  if (stored.includes(id)) {
    toast.error('This is Already added')
  } else {
    stored.push(id);
    const convert = JSON.stringify(stored);
    localStorage.setItem("cart", convert);
    toast.success('This product is added to your cart')
  }
};


export const deleteFromCart = (delId) => {
  const getCart = getStoredCart();

  if(getCart){
    
    const newCart = getCart.filter(id => id != delId );
    

    const convert = JSON.stringify(newCart);
    localStorage.setItem("cart", convert);
    toast.success('Deleted Successfully')

  }
}
