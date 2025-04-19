import React from "react";
import Product from "./Product";

const Products = ({data}) => {
  
  return (
    <>
      <div className="py-20">
        <h3 className="text-2xl pb-5">Products</h3>

        <div className="grid grid-cols-4 gap-10">
        {
          data.map(product => <Product key={product.id} product={product}></Product> )
        }
        </div>
      </div>
    </>
  );
};

export default Products;
