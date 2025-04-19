import React from "react";
import { Suspense } from "react";
import Products from "./Products";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProductCatView = ({ categories }) => {
  return (
    <>
      <div className="py-20">
        <h3 className="text-2xl pb-5">Products</h3>
        <Tabs defaultIndex={3}>
          <TabList>
            {categories.map((cat, i) => (
              <Tab key={i}>{cat}</Tab>
            ))}
          </TabList>

          {categories.map((cat, i) => {
            const data = fetch(
              `https://fakestoreapi.com/products/category/${cat}`
            ).then((res) => res.json());

            return (
              <TabPanel key={i}>
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-[100vh]">
                      <span className="loading loading-infinity loading-xl"></span>
                    </div>
                  }>
                  <Products data={data}></Products>
                </Suspense>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default ProductCatView;
