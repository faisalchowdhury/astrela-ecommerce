import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RiMenu5Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { NavLink } from "react-router";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = (
    <>
      <NavLink to={"/"}>
        <li className="hover:text-purple-800 font-medium">Home</li>
      </NavLink>
      <NavLink to={"/about"}>
        <li className="hover:text-purple-800 font-medium">About</li>
      </NavLink>
      <NavLink to={"/products"}>
        <li className="hover:text-purple-800 font-medium">Products</li>
      </NavLink>
      <NavLink to={"/cart"}>
        <li className="hover:text-purple-800 font-medium">Products</li>
      </NavLink>
      <li className="hover:text-purple-800 font-medium">
        <a href="">Contact</a>
      </li>
    </>
  );

  return (
    <>
      <div className="shadow-sm">
        <div className="navbar bg-base-100 lg:w-7xl mx-auto">
          <div className="navbar-start">
            {/* Dropdown */}
            <div>
              {toggle == false ? (
                <RiMenu5Fill
                  onClick={() => setToggle(!toggle)}
                  size={26}
                  className="lg:hidden"
                />
              ) : (
                <IoIosCloseCircleOutline
                  onClick={() => setToggle(!toggle)}
                  size={26}
                  className="lg:hidden"
                />
              )}

              {toggle ? (
                <ul className="lg:hidden absolute bg-slate-100 w-[200px] p-5 rounded-sm shadow">
                  {menu}
                </ul>
              ) : null}
            </div>
            {/* Dropdown */}
            <ul className="lg:flex gap-5 hidden">{menu}</ul>
          </div>
          <div className="navbar-center w-[200px]">
            <a className=" text-xl">
              <img className="w-full" src={logo} alt="" />
            </a>
          </div>
          <div className="navbar-end space-x-5">
            <label className="flex py-2 px-3 gap-3 shadow-sm rounded-sm">
              <input
                className="focus:outline-none"
                type="search"
                placeholder="Search"
              />
              <IoSearchOutline size={22} />
            </label>

            <PiShoppingCartSimpleLight size={22} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
