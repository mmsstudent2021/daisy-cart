import React from "react";
import Navbar from "./Navbar";
import { MdOutlineDashboard } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-20">
        {/* <!-- Page content here --> */}
        <Navbar />
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-40 bg-base-100 text-base-content">
          <div className="flex items-center gap-3">
            <MdOutlineDashboard />
            <p>Dashboard</p>
          </div>
          <NavLink to="/">
            <button className="py-1 my-3 bg-base-300 w-full rounded">
              Dashboard
            </button>
          </NavLink>

          <div className="flex items-center gap-3">
            <FaHeadphones />
            <p>Products</p>
          </div>
          <NavLink to="/products">
            <button className="py-1 my-1 bg-base-300 w-full rounded">
              Products
            </button>
          </NavLink>
          <button className="py-1 my-1 bg-base-300 w-full rounded">
            Add Product
          </button>
          <button className="py-1 my-1 bg-base-300 w-full rounded">
            Cart - 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
