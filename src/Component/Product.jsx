import React from "react";
import { BsFillStarFill, BsMinecart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { NavLink } from "react-router";

const Product = ({ product }) => {
  const { id, title, image, rating } = product;
  return (
    <div className="border border-slate-100  shadow rounded-xl p-5 cursor-grab space-y-2">
      <div className="flex justify-center py-10 ">
        <img className="h-[200px] w-3/5" src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <p className="flex gap-2 items-center">
        {" "}
        Rating
        <BsFillStarFill color="orange" />({rating?.rate})
      </p>

      <div className="flex gap-2">
        <button className="flex items-center gap-2 btn">
          <BsMinecart /> <span>Add To Cart</span>
        </button>
        <NavLink to={`/single-product/${id}`} className="btn">
          <IoEye />
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
