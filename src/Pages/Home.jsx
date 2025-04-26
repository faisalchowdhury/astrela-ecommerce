import React from "react";
import Hero from "../Component/Hero";
import Products from "../Component/Products";
import { useLoaderData } from "react-router";
import ProductCatView from "../Component/ProductCatView";
import { Helmet } from "react-helmet-async";


const Home = () => {
  const categories = useLoaderData();
 
  return (
    <>
     <Helmet>
           <title>Home</title>
     </Helmet>
      <Hero></Hero>
      
      <ProductCatView categories={categories} ></ProductCatView>
     
    </>
  );
};

export default Home;
