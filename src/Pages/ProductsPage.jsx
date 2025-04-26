import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Product from "../Component/Product";

const ProductsPage = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) {
      setProducts(data.slice(0, 10));
      window.scrollTo(0, 0);
    } else {
      setProducts(data);
    }
  }, [show]);
  return (
    <>
    
      <div className="grid grid-cols-4 gap-10 py-20">
        {products.map((singleProduct) => (
          <Product key={singleProduct.id} product={singleProduct}></Product>
        ))}
      </div>

      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
        className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span className="relative">{!show ? "Show More" : "Show Less"}</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"></span>
      </button>
    </>
  );
};

export default ProductsPage;
