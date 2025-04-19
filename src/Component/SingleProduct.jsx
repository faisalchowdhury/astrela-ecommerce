import React from "react";
import { BsFillStarFill, BsMinecart } from "react-icons/bs";
import { useLoaderData } from "react-router";

const SingleProduct = () => {
  const { title, image, price, description, category, rating } =
    useLoaderData();
  return (
    <>
      <div className="shadow-2xl rounded-lg mt-10">
        <div className="flex p-20">
          <div className="flex-1 flex justify-center">
            <img className="w-[300px] " src={image} alt="" />
          </div>
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl text-purple-900">{title}</h2>
            <h3 className="text-2xl font-medium">Price : ${price}</h3>
            <p className="text-gray-700 p-10 bg-gray-100 rounded-sm">
              {description}
            </p>
            <div className="flex gap-3 items-center">
              Category :
              <button className="py-1 px-2 text-slate-800 border rounded-sm border-slate-800">
                {category}
              </button>
            </div>
            <p className="flex gap-2 items-center">
              Rating
              <BsFillStarFill color="orange" />({rating?.rate})
            </p>

            <button className="flex items-center gap-2 btn bg-purple-900 text-white px-5 py-5 border-none shadow-2xl shadow-purple-800 rounded-md">
              <BsMinecart /> <span>Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
