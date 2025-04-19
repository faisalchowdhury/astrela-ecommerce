import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-6xl tracking-[1rem] py-10">
          Shine Bold With Astrela
        </h1>

        <div className="bg-[url(assets/banner.png)] bg-cover bg-center h-[80vh]  rounded-lg relative">
          <div className="inset-0 absolute z-0 h-full bg-linear-to-r from-gray-700 to-gray-950 opacity-40 rounded-lg"></div>
          <div className="grid grid-cols-2 h-full items-center px-20 ">
            <div className="space-y-3 text-white isolate">
              <h2 className=" text-5xl ">
                Get 20% of on <br /> your first Purchase
              </h2>
              <p className="">
                Astrela is an E-commerce platform which gives you the quality
                shopping experience with a affordable price . we believe in
                quality over quantity ....
              </p>
              <button className="btn border border-white rounded-sm hover:bg-gray-900 hover:border-gray-900 ">
                Explore yours
              </button>
            </div>

            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
