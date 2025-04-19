import React from "react";
import Hero from "../Component/Hero";
import Products from "../Component/Products";
import { useLoaderData } from "react-router";
import ProductCatView from "../Component/ProductCatView";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories)
  return (
    <>
      <Hero></Hero>
      <ProductCatView categories={categories} ></ProductCatView>
      {/* <Products data={data}></Products> */}
    </>
  );
};

export default Home;
