import React from "react";
import Products from "../Component/Products";
import { useLoaderData } from "react-router";
import Product from "../Component/Product";

const ProductsPage = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="grid grid-cols-4 gap-10 py-20">
        {data.map((singleProduct) => (
          <Product product={singleProduct}></Product>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
