import React from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
import { NavLink } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Menu from "./Menu";

function Navbar() {
  const { cart } = useCart();
  return (
    <>
      <div
        className={`absolute w-full flex p-5 items-center justify-between sm:w-full sm:flex sm:p-5 sm:items-center sm:justify-between md:w-full md:flex md:p-5 md:items-center md:justify-between lg:w-full lg:flex lg:p-5 lg:items-center lg:justify-between xl:w-full xl:flex xl:p-5 xl:items-center xl:justify-between 2xl:w-full 2xl:flex 2xl:p-5 2xl:items-center 2xl:justify-between `}
      >
        <div className="logo">
          <img className="w-32" src={logo} alt="logo" />
        </div>
        <div className="sm:hidden ">
          <Menu />
        </div>
        <ul className="sm:flex items-center hidden">
          <li className="mx-3">
            <NavLink
              to="/E-Commerce-Web-React/"
              end
              className={({ isActive }) =>
                `${isActive ? "text-[#ff513b] font-semibold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/E-Commerce-Web-React/products"
              className={({ isActive }) =>
                `${isActive ? "text-[#ff513b] font-semibold" : ""}`
              }
            >
              Products
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/E-Commerce-Web-React/about"
              className={({ isActive }) =>
                `${isActive ? "text-[#ff513b] font-semibold" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/E-Commerce-Web-React/contact"
              className={({ isActive }) =>
                `${isActive ? "text-[#ff513b] font-semibold" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/E-Commerce-Web-React/login"
              className={({ isActive }) =>
                `${isActive ? "text-[#ff513b] font-semibold" : ""}`
              }
            >
              Login
            </NavLink>
          </li>
          <li className="mx-3 relative">
            <NavLink to="/E-Commerce-Web-React/cart">
              <img className="w-8" src={cartIcon} alt="" />
            </NavLink>
            <span className="absolute w-5 h-5 bg-[#ff523b] rounded-full top-[-10px] right-[-5px] text-center text-white leading-5">
              {cart.length}
            </span>
          </li>
        </ul>
        <div className="sm:hidden mx-3 relative">
          <NavLink to="/E-Commerce-Web-React/cart">
            <img className="w-8" src={cartIcon} alt="" />
          </NavLink>
          <span className="absolute w-5 h-5 bg-[#ff523b] rounded-full top-[-10px] right-[-5px] text-center text-white leading-5">
            {cart.length}
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
