import React from "react";
import "./App.css";
import Header from "./inc/Header";
import Footer from "./inc/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <div className="montserrat-astrela">
        <Header></Header>
        <div className="w-7xl mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
