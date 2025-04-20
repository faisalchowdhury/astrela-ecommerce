import React from "react";
import "./App.css";
import Header from "./inc/Header";
import Footer from "./inc/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <div className="montserrat-astrela">
        <Header></Header>
        <div className="w-7xl mx-auto">
          <Outlet></Outlet>
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />  
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
