import React, { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { deleteFromCart, getStoredCart } from "../JS/localStorage";

const Cart = () => {
  const [actualData ,setActualData] =useState([]);
  const storedCart = getStoredCart();


  
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => setActualData(data) ) ;    
    
  },[storedCart])


  const matchedProducts = storedCart.map(proId =>
    actualData.find(product => product.id == proId)
  );

  return (
    <>
     <div>
    
     <div className="w-3/5 mx-auto py-10">
     
     {

      matchedProducts.map((product ,id) => 
         <div key={id} className="p-10 rounded-lg shadow-sm relative my-5 flex gap-5">
      <div>
       <img className="w-[100px] h-[100px]" src={product?.image} alt="" />
      </div>

      <div>
      <h1 className="text-2xl text-purple-900">{product?.title}</h1>
       <h3 className="text-xl">Price : ${product?.price}</h3>
       <p className="text-gray-700">Category : {product?.category}</p>
       <button onClick={() => deleteFromCart(product?.id)} className="absolute bottom-10 right-10 text-red-600 p-3 border border-white rounded-full hover:border-red-600">
       <FiDelete size={26} />
       </button>
      </div>
     </div>
       )
     }
   </div>
  </div>
    </>
  )
 
};

export default Cart;
