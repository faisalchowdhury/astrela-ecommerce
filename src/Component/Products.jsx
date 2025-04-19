import React, { use } from "react";
import Product from "./Product";

const Products = ({ data }) => {
  const productByCat = use(data);

  return (
    <>
      <div className="py-20">
        <div className="grid grid-cols-4 gap-10">
          {productByCat.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
